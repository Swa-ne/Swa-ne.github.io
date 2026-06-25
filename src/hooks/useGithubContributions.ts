import { useEffect, useState } from 'react';
import type { ContributionLoadStatus, GithubContributionPayload } from '../types/portfolio';
import { createFallbackContributionPayload, isGithubContributionPayload } from '../utils/contributions';

interface GithubContributionsState {
    payload: GithubContributionPayload;
    status: ContributionLoadStatus;
}

const fallbackPayload = createFallbackContributionPayload();

export function useGithubContributions() {
    const [state, setState] = useState<GithubContributionsState>({
        payload: fallbackPayload,
        status: 'loading',
    });

    useEffect(() => {
        const controller = new AbortController();

        async function loadContributions() {
            try {
                const response = await fetch('/github-contributions.json', {
                    cache: 'no-cache',
                    signal: controller.signal,
                });

                if (!response.ok) {
                    throw new Error(`Unable to load GitHub contributions: ${response.status}`);
                }

                const payload: unknown = await response.json();

                if (!isGithubContributionPayload(payload)) {
                    throw new Error('GitHub contributions payload has an unexpected shape.');
                }

                setState({
                    payload,
                    status: 'live',
                });
            } catch (error) {
                if (controller.signal.aborted) {
                    return;
                }

                setState({
                    payload: fallbackPayload,
                    status: 'fallback',
                });
            }
        }

        void loadContributions();

        return () => {
            controller.abort();
        };
    }, []);

    return state;
}
