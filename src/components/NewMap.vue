<template>
    <vl-map
        :load-tiles-while-animating="true"
        :load-tiles-while-interacting="true"
        data-projection="EPSG:4326"
        style="height:650px"
    >
        <vl-view
            :zoom.sync="zoom"
            :center.sync="center"
            :rotation.sync="rotation"
        >
        </vl-view>
        <vl-layer-tile id="osm">
            <vl-source-osm></vl-source-osm>
        </vl-layer-tile>
        <component v-for="layer in layers" :is="layer.cmp" :key="layer.id" v-bind="layer">
            <!-- add vl-source-* -->
            <component :is="layer.source.cmp" v-bind="layer.source">
                <!-- add static features to vl-source-vector if provided -->
                <vl-feature 
                            v-for="feature in layer.source.staticFeatures" :key="feature.id"
                            :id="feature.id" :properties="feature.properties">
                    <component :is="geometryTypeToCmpName(feature.geometry.type)" v-bind="feature.geometry"></component>
                </vl-feature>

                <!-- add inner source if provided (like vl-source-vector inside vl-source-cluster) -->
                <component v-if="layer.source.source" :is="layer.source.source.cmp" v-bind="layer.source.source">
                    <!-- add static features to vl-source-vector if provided -->
                    <vl-feature
                                v-for="feature in layer.source.source.staticFeatures" :key="feature.id"
                                :id="feature.id" :properties="feature.properties">
                        <component :is="geometryTypeToCmpName(feature.geometry.type)" v-bind="feature.geometry"></component>
                    </vl-feature>
                </component>
            </component>
            <!--// vl-source-* -->

            <!-- add style components if provided -->
            <!-- create vl-style-box or vl-style-func -->
            <component v-for="(style, i) in layer.style" :key="i" :is="style.cmp" v-bind="style">
                <!-- create inner style components: vl-style-circle, vl-style-icon, vl-style-fill, vl-style-stroke & etc -->
                <component v-for="(st, cmp) in style.styles" :key="cmp" :is="cmp" v-bind="st">
                    <!-- vl-style-fill, vl-style-stroke if provided -->
                    <vl-style-fill v-if="st.fill" v-bind="st.fill"></vl-style-fill>
                    <vl-style-stroke v-if="st.stroke" v-bind="st.stroke"></vl-style-stroke>
                </component>
            </component>
            <!--// style -->
        </component>
            <!--// vl-source-* -->

    </vl-map>    
</template>

<script>
import DistrictData from '@/assets/District.json'
import ProvinceData from '@/assets/Province.json'
import { kebabCase } from 'lodash'
export default {
    data() {
        return {
            zoom: 7,
            center: [84.528289, 28.197842],
            rotation: 0,
            layers: [
                    // Countries vector layer
                    // loads GeoJSON data from remote server
                    {
                        id: 'domains',
                        title: 'Domains',
                        cmp: 'vl-layer-vector',
                        visible: true,
                        source: {
                            cmp: 'vl-source-vector',
                            staticFeatures: DistrictData.features,
                        },
                    },
                    {
                        id: 'domains',
                        title: 'Domains',
                        cmp: 'vl-layer-vector',
                        visible: true,
                        source: {
                            cmp: 'vl-source-vector',
                            staticFeatures: ProvinceData.features,
                        },
                    },
                ]
        }
    },
    methods: {
            geometryTypeToCmpName (type) {
                return 'vl-geom-' + kebabCase(type)
            },
        },
}
</script>
<style scoped>

</style>