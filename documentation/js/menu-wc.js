'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">szakdolgozat documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-816799403f7d1676aa37cf72e0436c43231632c83e6532523494b99f140722690e54c1814674fee97409328929a175b74858b619e682a2c2a97986f886d6e458"' : 'data-target="#xs-components-links-module-AppModule-816799403f7d1676aa37cf72e0436c43231632c83e6532523494b99f140722690e54c1814674fee97409328929a175b74858b619e682a2c2a97986f886d6e458"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-816799403f7d1676aa37cf72e0436c43231632c83e6532523494b99f140722690e54c1814674fee97409328929a175b74858b619e682a2c2a97986f886d6e458"' :
                                            'id="xs-components-links-module-AppModule-816799403f7d1676aa37cf72e0436c43231632c83e6532523494b99f140722690e54c1814674fee97409328929a175b74858b619e682a2c2a97986f886d6e458"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/BartModule.html" data-type="entity-link" >BartModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-BartModule-658837941278a3cb2df57fa70ac6d14efe684989fe1e8aa36d62e5b097c9dd7177f0304322e945207b0f9fe88f8dc81b898c221825c7dc7c2eb41f01514a60f9"' : 'data-target="#xs-components-links-module-BartModule-658837941278a3cb2df57fa70ac6d14efe684989fe1e8aa36d62e5b097c9dd7177f0304322e945207b0f9fe88f8dc81b898c221825c7dc7c2eb41f01514a60f9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BartModule-658837941278a3cb2df57fa70ac6d14efe684989fe1e8aa36d62e5b097c9dd7177f0304322e945207b0f9fe88f8dc81b898c221825c7dc7c2eb41f01514a60f9"' :
                                            'id="xs-components-links-module-BartModule-658837941278a3cb2df57fa70ac6d14efe684989fe1e8aa36d62e5b097c9dd7177f0304322e945207b0f9fe88f8dc81b898c221825c7dc7c2eb41f01514a60f9"' }>
                                            <li class="link">
                                                <a href="components/BartComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BartComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/BartRoutingModule.html" data-type="entity-link" >BartRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/BartStatModule.html" data-type="entity-link" >BartStatModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-BartStatModule-637db823372e84123948c083566efef082a708e382d159376019380044648e07bc36447c01dd3a71369c8754b8439f27e43ae2a9da6da21901a6260e90af29aa"' : 'data-target="#xs-components-links-module-BartStatModule-637db823372e84123948c083566efef082a708e382d159376019380044648e07bc36447c01dd3a71369c8754b8439f27e43ae2a9da6da21901a6260e90af29aa"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BartStatModule-637db823372e84123948c083566efef082a708e382d159376019380044648e07bc36447c01dd3a71369c8754b8439f27e43ae2a9da6da21901a6260e90af29aa"' :
                                            'id="xs-components-links-module-BartStatModule-637db823372e84123948c083566efef082a708e382d159376019380044648e07bc36447c01dd3a71369c8754b8439f27e43ae2a9da6da21901a6260e90af29aa"' }>
                                            <li class="link">
                                                <a href="components/BartStatComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BartStatComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/BartStatRoutingModule.html" data-type="entity-link" >BartStatRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DiagramsModule.html" data-type="entity-link" >DiagramsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DiagramsModule-c8356626e2c9f0638ca1ae1eeee7541b4a1e42e974257e371802e47a2948353b4e6b5417d1c44d0ac7e1d1136df0af76b160c7802a5414f5611e11a1311c1506"' : 'data-target="#xs-components-links-module-DiagramsModule-c8356626e2c9f0638ca1ae1eeee7541b4a1e42e974257e371802e47a2948353b4e6b5417d1c44d0ac7e1d1136df0af76b160c7802a5414f5611e11a1311c1506"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DiagramsModule-c8356626e2c9f0638ca1ae1eeee7541b4a1e42e974257e371802e47a2948353b4e6b5417d1c44d0ac7e1d1136df0af76b160c7802a5414f5611e11a1311c1506"' :
                                            'id="xs-components-links-module-DiagramsModule-c8356626e2c9f0638ca1ae1eeee7541b4a1e42e974257e371802e47a2948353b4e6b5417d1c44d0ac7e1d1136df0af76b160c7802a5414f5611e11a1311c1506"' }>
                                            <li class="link">
                                                <a href="components/DiagramsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DiagramsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DiagramsRoutingModule.html" data-type="entity-link" >DiagramsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HeaderToolbarModule.html" data-type="entity-link" >HeaderToolbarModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HeaderToolbarModule-d8cb161f95a992b15ded663c6ed64e52976951f8b225a07c7b515b4bc95fb25ca9ef10b6bc8b95754ebe37f965d59677ab387120b5c0b30345dcfe14bbcfaa4c"' : 'data-target="#xs-components-links-module-HeaderToolbarModule-d8cb161f95a992b15ded663c6ed64e52976951f8b225a07c7b515b4bc95fb25ca9ef10b6bc8b95754ebe37f965d59677ab387120b5c0b30345dcfe14bbcfaa4c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HeaderToolbarModule-d8cb161f95a992b15ded663c6ed64e52976951f8b225a07c7b515b4bc95fb25ca9ef10b6bc8b95754ebe37f965d59677ab387120b5c0b30345dcfe14bbcfaa4c"' :
                                            'id="xs-components-links-module-HeaderToolbarModule-d8cb161f95a992b15ded663c6ed64e52976951f8b225a07c7b515b4bc95fb25ca9ef10b6bc8b95754ebe37f965d59677ab387120b5c0b30345dcfe14bbcfaa4c"' }>
                                            <li class="link">
                                                <a href="components/HeaderToolbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderToolbarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeModule.html" data-type="entity-link" >HomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomeModule-a5e0b554cad3b941006251794c421c9c9ea22f6344a8cf3a0d8979ea113d3f90d849ae5d5c9f9cd66e15ce0ddc594f9d963b622ea7fb86d5e39a63869a85933d"' : 'data-target="#xs-components-links-module-HomeModule-a5e0b554cad3b941006251794c421c9c9ea22f6344a8cf3a0d8979ea113d3f90d849ae5d5c9f9cd66e15ce0ddc594f9d963b622ea7fb86d5e39a63869a85933d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomeModule-a5e0b554cad3b941006251794c421c9c9ea22f6344a8cf3a0d8979ea113d3f90d849ae5d5c9f9cd66e15ce0ddc594f9d963b622ea7fb86d5e39a63869a85933d"' :
                                            'id="xs-components-links-module-HomeModule-a5e0b554cad3b941006251794c421c9c9ea22f6344a8cf3a0d8979ea113d3f90d849ae5d5c9f9cd66e15ce0ddc594f9d963b622ea7fb86d5e39a63869a85933d"' }>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeRoutingModule.html" data-type="entity-link" >HomeRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/IowaModule.html" data-type="entity-link" >IowaModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-IowaModule-f5ecb82c494eccb7739b72632f994508d093d4eeff0a632a4a0cb4b65725dc56da001ccea46611e17eb05714d14845c6407b8b514ba3f1cdfa963b173f9c3800"' : 'data-target="#xs-components-links-module-IowaModule-f5ecb82c494eccb7739b72632f994508d093d4eeff0a632a4a0cb4b65725dc56da001ccea46611e17eb05714d14845c6407b8b514ba3f1cdfa963b173f9c3800"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-IowaModule-f5ecb82c494eccb7739b72632f994508d093d4eeff0a632a4a0cb4b65725dc56da001ccea46611e17eb05714d14845c6407b8b514ba3f1cdfa963b173f9c3800"' :
                                            'id="xs-components-links-module-IowaModule-f5ecb82c494eccb7739b72632f994508d093d4eeff0a632a4a0cb4b65725dc56da001ccea46611e17eb05714d14845c6407b8b514ba3f1cdfa963b173f9c3800"' }>
                                            <li class="link">
                                                <a href="components/EndquestionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EndquestionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IowaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IowaComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/IowaRoutingModule.html" data-type="entity-link" >IowaRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/IowaStatModule.html" data-type="entity-link" >IowaStatModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-IowaStatModule-d31d2f5725cc2a56efa8507881f59fe438f4ba18361aca47a4fcf8f2690cbbd7add9df537b28624ab02411db51794cd571a68c73c0fa10a70227b02e4f7dbf50"' : 'data-target="#xs-components-links-module-IowaStatModule-d31d2f5725cc2a56efa8507881f59fe438f4ba18361aca47a4fcf8f2690cbbd7add9df537b28624ab02411db51794cd571a68c73c0fa10a70227b02e4f7dbf50"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-IowaStatModule-d31d2f5725cc2a56efa8507881f59fe438f4ba18361aca47a4fcf8f2690cbbd7add9df537b28624ab02411db51794cd571a68c73c0fa10a70227b02e4f7dbf50"' :
                                            'id="xs-components-links-module-IowaStatModule-d31d2f5725cc2a56efa8507881f59fe438f4ba18361aca47a4fcf8f2690cbbd7add9df537b28624ab02411db51794cd571a68c73c0fa10a70227b02e4f7dbf50"' }>
                                            <li class="link">
                                                <a href="components/IowaStatComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IowaStatComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/IowaStatRoutingModule.html" data-type="entity-link" >IowaStatRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LoginModule.html" data-type="entity-link" >LoginModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LoginModule-b4dd727d02b7640bcf834f675ffb9bdf78768967a1b027545695f6c6e6fe6804088f1c1bfe917f782f45f274040f42cc3b5ee88a9884ec074e3adb8d1f8fe76f"' : 'data-target="#xs-components-links-module-LoginModule-b4dd727d02b7640bcf834f675ffb9bdf78768967a1b027545695f6c6e6fe6804088f1c1bfe917f782f45f274040f42cc3b5ee88a9884ec074e3adb8d1f8fe76f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LoginModule-b4dd727d02b7640bcf834f675ffb9bdf78768967a1b027545695f6c6e6fe6804088f1c1bfe917f782f45f274040f42cc3b5ee88a9884ec074e3adb8d1f8fe76f"' :
                                            'id="xs-components-links-module-LoginModule-b4dd727d02b7640bcf834f675ffb9bdf78768967a1b027545695f6c6e6fe6804088f1c1bfe917f782f45f274040f42cc3b5ee88a9884ec074e3adb8d1f8fe76f"' }>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginRoutingModule.html" data-type="entity-link" >LoginRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MentalrotModule.html" data-type="entity-link" >MentalrotModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MentalrotModule-410323851cc5ba1c68cdf55b09c2bcee064397c7e3352caf0a63a60a812b7f1c0346d7e6685e08c2cc48212f70892a41a770be8e21b0df04a2aa0d361c74757e"' : 'data-target="#xs-components-links-module-MentalrotModule-410323851cc5ba1c68cdf55b09c2bcee064397c7e3352caf0a63a60a812b7f1c0346d7e6685e08c2cc48212f70892a41a770be8e21b0df04a2aa0d361c74757e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MentalrotModule-410323851cc5ba1c68cdf55b09c2bcee064397c7e3352caf0a63a60a812b7f1c0346d7e6685e08c2cc48212f70892a41a770be8e21b0df04a2aa0d361c74757e"' :
                                            'id="xs-components-links-module-MentalrotModule-410323851cc5ba1c68cdf55b09c2bcee064397c7e3352caf0a63a60a812b7f1c0346d7e6685e08c2cc48212f70892a41a770be8e21b0df04a2aa0d361c74757e"' }>
                                            <li class="link">
                                                <a href="components/MentalrotComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MentalrotComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MentalrotRoutingModule.html" data-type="entity-link" >MentalrotRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MentrotStatModule.html" data-type="entity-link" >MentrotStatModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MentrotStatModule-e4cc3a55a13779dc6eea03915e39f66396f69f554e161aec472fb9e3ba80c0321da7626c3b039318890eb5541987ec9b8e262bda55317ed878b32fccbd140bfe"' : 'data-target="#xs-components-links-module-MentrotStatModule-e4cc3a55a13779dc6eea03915e39f66396f69f554e161aec472fb9e3ba80c0321da7626c3b039318890eb5541987ec9b8e262bda55317ed878b32fccbd140bfe"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MentrotStatModule-e4cc3a55a13779dc6eea03915e39f66396f69f554e161aec472fb9e3ba80c0321da7626c3b039318890eb5541987ec9b8e262bda55317ed878b32fccbd140bfe"' :
                                            'id="xs-components-links-module-MentrotStatModule-e4cc3a55a13779dc6eea03915e39f66396f69f554e161aec472fb9e3ba80c0321da7626c3b039318890eb5541987ec9b8e262bda55317ed878b32fccbd140bfe"' }>
                                            <li class="link">
                                                <a href="components/MentrotStatComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MentrotStatComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MentrotStatRoutingModule.html" data-type="entity-link" >MentrotStatRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/NavModule.html" data-type="entity-link" >NavModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-NavModule-b15e26777d9584d02d6a3ed84c91f74ed975de9d038c8f299ceab99ee0f6c54da82005da79b1e39a717c7955ef394d4cb343689a91a60a653f70b1c37a200e08"' : 'data-target="#xs-components-links-module-NavModule-b15e26777d9584d02d6a3ed84c91f74ed975de9d038c8f299ceab99ee0f6c54da82005da79b1e39a717c7955ef394d4cb343689a91a60a653f70b1c37a200e08"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-NavModule-b15e26777d9584d02d6a3ed84c91f74ed975de9d038c8f299ceab99ee0f6c54da82005da79b1e39a717c7955ef394d4cb343689a91a60a653f70b1c37a200e08"' :
                                            'id="xs-components-links-module-NavModule-b15e26777d9584d02d6a3ed84c91f74ed975de9d038c8f299ceab99ee0f6c54da82005da79b1e39a717c7955ef394d4cb343689a91a60a653f70b1c37a200e08"' }>
                                            <li class="link">
                                                <a href="components/NavComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/NavstatisticsModule.html" data-type="entity-link" >NavstatisticsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-NavstatisticsModule-de5fce0c57c732616be1cfcf2f3967fc13ea81371b9e3171114f17e9606abae3da5be605c57c0f59d7f7b801cc98d142d542c2b525a0f456faae20c1428ef16e"' : 'data-target="#xs-components-links-module-NavstatisticsModule-de5fce0c57c732616be1cfcf2f3967fc13ea81371b9e3171114f17e9606abae3da5be605c57c0f59d7f7b801cc98d142d542c2b525a0f456faae20c1428ef16e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-NavstatisticsModule-de5fce0c57c732616be1cfcf2f3967fc13ea81371b9e3171114f17e9606abae3da5be605c57c0f59d7f7b801cc98d142d542c2b525a0f456faae20c1428ef16e"' :
                                            'id="xs-components-links-module-NavstatisticsModule-de5fce0c57c732616be1cfcf2f3967fc13ea81371b9e3171114f17e9606abae3da5be605c57c0f59d7f7b801cc98d142d542c2b525a0f456faae20c1428ef16e"' }>
                                            <li class="link">
                                                <a href="components/NavstatisticsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavstatisticsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/NavstatisticsRoutingModule.html" data-type="entity-link" >NavstatisticsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ProfileModule.html" data-type="entity-link" >ProfileModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ProfileModule-1de6c8f95d25fefb895380351c37764677825a1b0c01affb1a4b9ad900ff934d064128277c6bfc677a362e7ea91e1d590a81f659d1b733258e0d11823eb5e623"' : 'data-target="#xs-components-links-module-ProfileModule-1de6c8f95d25fefb895380351c37764677825a1b0c01affb1a4b9ad900ff934d064128277c6bfc677a362e7ea91e1d590a81f659d1b733258e0d11823eb5e623"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProfileModule-1de6c8f95d25fefb895380351c37764677825a1b0c01affb1a4b9ad900ff934d064128277c6bfc677a362e7ea91e1d590a81f659d1b733258e0d11823eb5e623"' :
                                            'id="xs-components-links-module-ProfileModule-1de6c8f95d25fefb895380351c37764677825a1b0c01affb1a4b9ad900ff934d064128277c6bfc677a362e7ea91e1d590a81f659d1b733258e0d11823eb5e623"' }>
                                            <li class="link">
                                                <a href="components/ProfileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfileComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProfileRoutingModule.html" data-type="entity-link" >ProfileRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/RegistrationModule.html" data-type="entity-link" >RegistrationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RegistrationModule-c9ee7620281ffdd8aa5699273984e9c935cdd39e9e0d7b2dea450b7a9442414422b5acd34d3f730997d4be9c67b9250e78b62abdcfa14fef669d3988c1deded9"' : 'data-target="#xs-components-links-module-RegistrationModule-c9ee7620281ffdd8aa5699273984e9c935cdd39e9e0d7b2dea450b7a9442414422b5acd34d3f730997d4be9c67b9250e78b62abdcfa14fef669d3988c1deded9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RegistrationModule-c9ee7620281ffdd8aa5699273984e9c935cdd39e9e0d7b2dea450b7a9442414422b5acd34d3f730997d4be9c67b9250e78b62abdcfa14fef669d3988c1deded9"' :
                                            'id="xs-components-links-module-RegistrationModule-c9ee7620281ffdd8aa5699273984e9c935cdd39e9e0d7b2dea450b7a9442414422b5acd34d3f730997d4be9c67b9250e78b62abdcfa14fef669d3988c1deded9"' }>
                                            <li class="link">
                                                <a href="components/RegistrationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegistrationComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RegistrationRoutingModule.html" data-type="entity-link" >RegistrationRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ResultModule.html" data-type="entity-link" >ResultModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SplashScreenModule.html" data-type="entity-link" >SplashScreenModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SplashScreenModule-8e32e10f3f3a382067bf3ff5886037dbe1fa1609843247c4a8bb13823afdba4888140685d265fc23e6bfd7b625ee7e0375d4ffd81249fbf06e5a89dba4bc3aba"' : 'data-target="#xs-components-links-module-SplashScreenModule-8e32e10f3f3a382067bf3ff5886037dbe1fa1609843247c4a8bb13823afdba4888140685d265fc23e6bfd7b625ee7e0375d4ffd81249fbf06e5a89dba4bc3aba"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SplashScreenModule-8e32e10f3f3a382067bf3ff5886037dbe1fa1609843247c4a8bb13823afdba4888140685d265fc23e6bfd7b625ee7e0375d4ffd81249fbf06e5a89dba4bc3aba"' :
                                            'id="xs-components-links-module-SplashScreenModule-8e32e10f3f3a382067bf3ff5886037dbe1fa1609843247c4a8bb13823afdba4888140685d265fc23e6bfd7b625ee7e0375d4ffd81249fbf06e5a89dba4bc3aba"' }>
                                            <li class="link">
                                                <a href="components/SplashScreenComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SplashScreenComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SplashScreenRoutingModule.html" data-type="entity-link" >SplashScreenRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/StartgameModule.html" data-type="entity-link" >StartgameModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-StartgameModule-7e44d7087e7f6ac1433cfe86fe694b674d0309e94f244e8ed89e93e52611b9fc80c27041e72976763824b49f1d778630f6d969f36e2c677c344d438115a6e17f"' : 'data-target="#xs-components-links-module-StartgameModule-7e44d7087e7f6ac1433cfe86fe694b674d0309e94f244e8ed89e93e52611b9fc80c27041e72976763824b49f1d778630f6d969f36e2c677c344d438115a6e17f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-StartgameModule-7e44d7087e7f6ac1433cfe86fe694b674d0309e94f244e8ed89e93e52611b9fc80c27041e72976763824b49f1d778630f6d969f36e2c677c344d438115a6e17f"' :
                                            'id="xs-components-links-module-StartgameModule-7e44d7087e7f6ac1433cfe86fe694b674d0309e94f244e8ed89e93e52611b9fc80c27041e72976763824b49f1d778630f6d969f36e2c677c344d438115a6e17f"' }>
                                            <li class="link">
                                                <a href="components/StartgameComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StartgameComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/StatisticsModule.html" data-type="entity-link" >StatisticsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-StatisticsModule-4e5797b38665e5a86429889b01136070821945e66b94c0eeae4c980c50bc865ccfeefb50b9e24a1c94acf9345e6daaa333fe298fa645f04f7b4d8fb32321ae0a"' : 'data-target="#xs-components-links-module-StatisticsModule-4e5797b38665e5a86429889b01136070821945e66b94c0eeae4c980c50bc865ccfeefb50b9e24a1c94acf9345e6daaa333fe298fa645f04f7b4d8fb32321ae0a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-StatisticsModule-4e5797b38665e5a86429889b01136070821945e66b94c0eeae4c980c50bc865ccfeefb50b9e24a1c94acf9345e6daaa333fe298fa645f04f7b4d8fb32321ae0a"' :
                                            'id="xs-components-links-module-StatisticsModule-4e5797b38665e5a86429889b01136070821945e66b94c0eeae4c980c50bc865ccfeefb50b9e24a1c94acf9345e6daaa333fe298fa645f04f7b4d8fb32321ae0a"' }>
                                            <li class="link">
                                                <a href="components/StatisticsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StatisticsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/StatsticsRoutingModule.html" data-type="entity-link" >StatsticsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/WcstModule.html" data-type="entity-link" >WcstModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-WcstModule-1714eae15d7505215030f7e3edb7006adb03d167c7ce7e7df2186832d028fd7bf63819e29943fe75e20f385a97d7d7e95f451f22db8e0bff12d17d78b84124a8"' : 'data-target="#xs-components-links-module-WcstModule-1714eae15d7505215030f7e3edb7006adb03d167c7ce7e7df2186832d028fd7bf63819e29943fe75e20f385a97d7d7e95f451f22db8e0bff12d17d78b84124a8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-WcstModule-1714eae15d7505215030f7e3edb7006adb03d167c7ce7e7df2186832d028fd7bf63819e29943fe75e20f385a97d7d7e95f451f22db8e0bff12d17d78b84124a8"' :
                                            'id="xs-components-links-module-WcstModule-1714eae15d7505215030f7e3edb7006adb03d167c7ce7e7df2186832d028fd7bf63819e29943fe75e20f385a97d7d7e95f451f22db8e0bff12d17d78b84124a8"' }>
                                            <li class="link">
                                                <a href="components/ResultComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResultComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WcstComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WcstComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/WcstRoutingModule.html" data-type="entity-link" >WcstRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/WcstStatModule.html" data-type="entity-link" >WcstStatModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-WcstStatModule-258aea966241aeb257dcbce3dfa893cf480d26a9106da9117aa0002a4eceff5223ee257d8fb1d4128b9d8724fd0982617ef533c5f2b2352c03aab8324c98c720"' : 'data-target="#xs-components-links-module-WcstStatModule-258aea966241aeb257dcbce3dfa893cf480d26a9106da9117aa0002a4eceff5223ee257d8fb1d4128b9d8724fd0982617ef533c5f2b2352c03aab8324c98c720"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-WcstStatModule-258aea966241aeb257dcbce3dfa893cf480d26a9106da9117aa0002a4eceff5223ee257d8fb1d4128b9d8724fd0982617ef533c5f2b2352c03aab8324c98c720"' :
                                            'id="xs-components-links-module-WcstStatModule-258aea966241aeb257dcbce3dfa893cf480d26a9106da9117aa0002a4eceff5223ee257d8fb1d4128b9d8724fd0982617ef533c5f2b2352c03aab8324c98c720"' }>
                                            <li class="link">
                                                <a href="components/WcstStatComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WcstStatComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/WcstStatRoutingModule.html" data-type="entity-link" >WcstStatRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/WelcomeModule.html" data-type="entity-link" >WelcomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-WelcomeModule-f937d5664220ca1f7943acacdccdc94816d44ece0be30fdf5ae55375dba60c7947c7b82b85d5e996f80584ba404528b1c2c23bc7107cee96d2bf03917279b5e7"' : 'data-target="#xs-components-links-module-WelcomeModule-f937d5664220ca1f7943acacdccdc94816d44ece0be30fdf5ae55375dba60c7947c7b82b85d5e996f80584ba404528b1c2c23bc7107cee96d2bf03917279b5e7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-WelcomeModule-f937d5664220ca1f7943acacdccdc94816d44ece0be30fdf5ae55375dba60c7947c7b82b85d5e996f80584ba404528b1c2c23bc7107cee96d2bf03917279b5e7"' :
                                            'id="xs-components-links-module-WelcomeModule-f937d5664220ca1f7943acacdccdc94816d44ece0be30fdf5ae55375dba60c7947c7b82b85d5e996f80584ba404528b1c2c23bc7107cee96d2bf03917279b5e7"' }>
                                            <li class="link">
                                                <a href="components/WelcomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WelcomeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/WelcomeRoutingModule.html" data-type="entity-link" >WelcomeRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AppPage.html" data-type="entity-link" >AppPage</a>
                            </li>
                            <li class="link">
                                <a href="classes/Results.html" data-type="entity-link" >Results</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DataService.html" data-type="entity-link" >DataService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoadingService.html" data-type="entity-link" >LoadingService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MstotimeService.html" data-type="entity-link" >MstotimeService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ResultService.html" data-type="entity-link" >ResultService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RightorwrongService.html" data-type="entity-link" >RightorwrongService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SoundService.html" data-type="entity-link" >SoundService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StartnavService.html" data-type="entity-link" >StartnavService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TitleService.html" data-type="entity-link" >TitleService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/ExitgameGuard.html" data-type="entity-link" >ExitgameGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/BART.html" data-type="entity-link" >BART</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Exit.html" data-type="entity-link" >Exit</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IOWA.html" data-type="entity-link" >IOWA</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MentalRotation.html" data-type="entity-link" >MentalRotation</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/WCST.html" data-type="entity-link" >WCST</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});