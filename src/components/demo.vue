<h2 id="map">
      <a href="#map">Map <small>(with GeoJSON &amp; image converter)</small></a>
      <button
        :class="{
          round: true,
          expand: expand.map
        }"
        @click="expand.map = !expand.map"
        aria-label="toggle"
      ></button>
    </h2>
    <section v-if="expand.map">
      <figure style="background-color: #404a59;">
        <chart
          :options="map"
          :init-options="initOptions"
          ref="map"
          autoresize
        />
      </figure>
      <p><button @click="convert">Convert to image</button></p>
    </section>
