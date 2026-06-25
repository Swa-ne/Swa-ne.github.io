interface ChipListProps {
    items: string[];
}

export function ChipList({ items }: ChipListProps) {
    return (
        <div className='chip-list'>
            {items.map((item) => (
                <span key={item} className='chip'>
                    {item}
                </span>
            ))}
        </div>
    );
}
