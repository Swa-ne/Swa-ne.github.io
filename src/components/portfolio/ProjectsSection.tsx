import type { ProjectItem } from '../../types/portfolio';
import { ChipList } from './shared/ChipList';
import { SectionTitle } from './shared/SectionTitle';

interface ProjectsSectionProps {
    projects: ProjectItem[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
    return (
        <section id='projects' className='section-layout'>
            <SectionTitle kicker='Featured Projects' title='Product builds with real workflows, technical depth, and measurable outcomes.' />

            <div className='project-grid'>
                {projects.map((project) => (
                    <article key={project.title} className='project-card'>
                        <div className='project-image'>
                            <img src={project.image} alt={project.title} />
                        </div>

                        <div className='project-body'>
                            <div className='project-header'>
                                <p className='mini-label'>{project.featured ? 'Featured case study' : 'Supporting project'}</p>
                                <h3>{project.title}</h3>
                            </div>

                            <p className='project-description'>{project.description}</p>

                            <ul className='detail-list project-impact-list'>
                                {project.impact.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>

                            <ChipList items={project.stack} />

                            <div className='project-actions'>
                                <a href={project.repositoryUrl} target='_blank' rel='noreferrer' className='project-action-button'>
                                    <CodeIcon />
                                    View code
                                </a>
                                {project.previewUrl ? (
                                    <a href={project.previewUrl} target='_blank' rel='noreferrer' className='project-action-button primary-action'>
                                        <ExternalLinkIcon />
                                        Live preview
                                    </a>
                                ) : null}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

function CodeIcon() {
    return (
        <svg viewBox='0 0 24 24' aria-hidden='true'>
            <path d='m9 18-6-6 6-6' />
            <path d='m15 6 6 6-6 6' />
        </svg>
    );
}

function ExternalLinkIcon() {
    return (
        <svg viewBox='0 0 24 24' aria-hidden='true'>
            <path d='M8 8h8v8' />
            <path d='m8 16 8-8' />
            <path d='M6.75 5.75h-1v12.5h12.5v-1' />
        </svg>
    );
}
