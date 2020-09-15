import React from 'react';
import './CategoryTree.scss';

function CategoryTree({ tree, level = 0, history, type }) {
    const newType = !level ? tree[0].type : type;
    const treeCmp = tree.map((branch) => {
        const { title, children = [] } = branch;
        const noChildren = !children || !children.length;

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
                    onClick={
                        noChildren
                            ? () => history.push(`/${type}/${branch.slug}`)
                            : undefined
                    }
                    className={`level-${level} ${
                        noChildren ? 'no-children link' : ''
                    }`}
                >
                    {title}
                </p>
                <div>
                    <CategoryTree
                        {...{
                            history,
                            level: level + 1,
                            tree: children,
                            type: newType,
                        }}
                    />
                </div>
            </div>
        );
    });

    return treeCmp;
}

export default CategoryTree;
