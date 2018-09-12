import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { FirstBlogModule } from './blog/blog.module';
import { FirstTagModule } from './tag/tag.module';
import { FirstEntryModule } from './entry/entry.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        FirstBlogModule,
        FirstTagModule,
        FirstEntryModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FirstEntityModule {}
