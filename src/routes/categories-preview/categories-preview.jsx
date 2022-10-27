import {CategoriesContext} from '../../context/categories.context';
import {Fragment, useContext} from 'react';
import './categories-preview.scss';
import {CategoryPreview} from '../../components/category-preview/category-preview.component';

export const CategoriesPreview=()=>{ 
    const {categoryMap}= useContext(CategoriesContext);

    return(
        <div>
            {Object.keys(categoryMap).map((title)=>
                <Fragment key={title}>
                    <CategoryPreview title={title} products={categoryMap[title]}/>
                </Fragment>
            )}
        </div>
    );
}
