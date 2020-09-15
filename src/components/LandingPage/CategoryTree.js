import React from 'react';
import './CategoryTree.scss';

function CategoryTree({ tree, level = 0 }) {
    const treeCmp = tree.map((branch) => {
        const { title, children = [] } = branch;
        return (
            <div
                style={{
                    marginLeft: 15 * (level ? 1 : 0) + 'px',
                    borderLeft:
                        children && children.length
                            ? '1px solid #ccc'
                            : undefined,
                    marginBottom: !level ? '40px' : undefined,
                }}
                key={title}
                className="categorytree"
            >
                <p
                    className={`level-${level} ${
                        !children || !children.length ? 'no-children' : ''
                    }`}
                >
                    {title}
                </p>
                <div>
                    <CategoryTree tree={children} level={level + 1} />
                </div>
            </div>
        );
    });

    return treeCmp;
}

export default CategoryTree;
