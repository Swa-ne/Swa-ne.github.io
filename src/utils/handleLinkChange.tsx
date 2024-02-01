import useLinkContext from '../context/contextHook';
const ActiveIndexContext = () => {
    const { activeIndex, setActiveIndex } = useLinkContext();

    return { activeIndex, setActiveIndex };
};

export default ActiveIndexContext;
