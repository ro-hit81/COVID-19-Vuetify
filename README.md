# COVID-19 Nepal Tracker

[![Vue.js](https://img.shields.io/badge/Vue.js-2.6.11-green.svg)](https://vuejs.org/)
[![Vuetify](https://img.shields.io/badge/Vuetify-2.2.11-blue.svg)](https://vuetifyjs.com/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-red.svg)](https://nodejs.org/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

> **⚠️ IMPORTANT NOTICE**: The COVID-19 data APIs used by this application are no longer operational, making the website completely non-functional. This project is now archived for historical and educational purposes. The codebase remains available to demonstrate the technical implementation and can serve as a reference for similar data visualization projects.

A comprehensive, interactive web application for tracking and visualizing COVID-19 statistics in Nepal and globally. Built with Vue.js, Vuetify, and advanced data visualization libraries, this application provides real-time insights into the pandemic's impact through interactive charts, maps, and statistical dashboards.

## 🌟 Features

### **Nepal-Specific Analytics**
- **Real-time Statistics**: Live data for confirmed cases, recoveries, deaths, and active cases
- **Province-wise Analysis**: Interactive provincial breakdown with timeline visualization
- **District-level Mapping**: Detailed district-wise case distribution with choropleth maps
- **Gender Analytics**: Gender-based case analysis and visualization
- **Testing Statistics**: Comprehensive testing data including RDT and PCR tests

### **Global COVID-19 Tracking**
- **World Overview**: Global statistics and country rankings
- **Interactive World Map**: Choropleth visualization of global case distribution
- **Country Comparison**: Searchable and sortable country-wise statistics
- **Real-time Updates**: Live data from multiple international APIs

### **Advanced Visualizations**
- **Interactive Charts**: Line charts, scatter plots, and timeline visualizations
- **Geographic Mapping**: Leaflet-based interactive maps with multiple layers
- **ECharts Integration**: Professional-grade charts with zoom, pan, and export features
- **Responsive Design**: Mobile-friendly interface with Vuetify Material Design

### **Information Hub**
- **FAQ Section**: Comprehensive frequently asked questions (English/Nepali)
- **Myths vs Facts**: COVID-19 misinformation clarification
- **Timeline Tracking**: Historical progression of cases with interactive timeline

## 🏗️ Technology Stack

### **Frontend Framework**
- **Vue.js 2.6.11**: Progressive JavaScript framework
- **Vuetify 2.2.11**: Material Design component framework
- **Vue Router**: Client-side routing
- **Vuex**: State management

### **Data Visualization**
- **ECharts 4.8.0**: Professional charting library
- **Vue-ECharts**: Vue integration for ECharts
- **Leaflet 1.6.0**: Interactive mapping library
- **Vue2-Leaflet**: Vue.js components for Leaflet
- **Vue-Choropleth**: Choropleth mapping component

### **Backend & Deployment**
- **Express.js**: Production server
- **Axios**: HTTP client for API requests
- **PWA Support**: Progressive Web App capabilities
- **Heroku Ready**: Production deployment configuration

## 📊 Data Sources

### **Nepal Data**
- **Primary API**: `https://data.nepalcorona.info/api/v1/`
  - Live COVID-19 cases
  - District and province-wise statistics
  - Gender demographics
  - Testing data
- **Backup API**: `https://nepalcorona.info/api/v1/`
  - Summary statistics
  - FAQ content
  - Timeline data

### **Global Data**
- **COVID-19 API**: `https://api.covid19api.com/summary`
  - World statistics
  - Country-wise data
  - Real-time updates

## 🚀 Installation & Setup

### **Prerequisites**
- Node.js (v12 or higher)
- npm or yarn package manager
- Modern web browser

### **Development Setup**

1. **Clone the repository**
   ```bash
   git clone https://github.com/ro-hit81/COVID-19-Vuetify.git
   cd COVID-19-Vuetify
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run serve
   ```

4. **Access the application**
   ```
   http://localhost:8080
   ```

### **Production Build**

1. **Build for production**
   ```bash
   npm run build
   ```

2. **Start production server**
   ```bash
   npm start
   ```

### **Code Quality**

```bash
# Lint and fix files
npm run lint
```

## 🌐 Live Application

The application is designed for deployment on various platforms:

- **Heroku**: Production-ready with `server.js`
- **Netlify/Vercel**: Static deployment support
- **GitHub Pages**: Static hosting configuration

## 📱 Application Structure

```
COVID-19-Vuetify/
├── public/                 # Static assets
│   ├── index.html         # Main HTML template
│   └── favicon.ico        # Application icon
├── src/
│   ├── assets/            # Charts and data configurations
│   │   ├── lineChart.js   # Line chart configuration
│   │   ├── mapDistrict.js # District mapping logic
│   │   ├── timelineChart.js # Timeline visualization
│   │   └── *.json         # GeoJSON data files
│   ├── components/        # Vue components
│   │   ├── dashboard/     # Dashboard charts and widgets
│   │   ├── globalStat/    # Global statistics components
│   │   ├── maps/          # Interactive mapping components
│   │   ├── nepalStat/     # Nepal-specific statistics
│   │   └── Navbar.vue     # Navigation component
│   ├── views/             # Page components
│   │   ├── Dashboard.vue  # Main dashboard
│   │   ├── Global.vue     # Global statistics page
│   │   ├── Nepal.vue      # Nepal-specific page
│   │   ├── Maps.vue       # Interactive maps
│   │   ├── Timeline.vue   # Timeline visualization
│   │   ├── Faqs.vue       # FAQ section
│   │   └── Myths.vue      # Myths vs facts
│   ├── router/            # Vue Router configuration
│   ├── store/             # Vuex store
│   ├── plugins/           # Vue plugins
│   └── main.js           # Application entry point
├── server.js              # Express server for production
├── package.json           # Dependencies and scripts
└── vue.config.js         # Vue CLI configuration
```

## 🎯 Key Features Breakdown

### **Dashboard Page**
- **Interactive Charts**: Real-time line charts, scatter plots, and heat maps
- **Geographic Visualization**: Nepal district and province mapping
- **Timeline Analysis**: Historical case progression
- **Gender Statistics**: Demographic breakdown of cases
- **Global Comparison**: Top 10 affected countries table

### **Nepal Statistics**
- **Comprehensive Metrics**: Total cases, active cases, recoveries, deaths
- **Testing Data**: PCR tests, RDT tests, pending results
- **Quarantine Information**: Quarantine and isolation statistics
- **Real-time Updates**: Live data with timestamp information

### **Global Tracking**
- **World Map**: Interactive choropleth map showing global case distribution
- **Country Statistics**: Searchable and sortable country data
- **Comparative Analysis**: Multi-country comparison capabilities

### **Interactive Maps**
- **Multiple Layers**: Province and district boundary overlays
- **Choropleth Visualization**: Color-coded case density mapping
- **Zoom and Pan**: Interactive navigation with multiple tile providers
- **Click Interactions**: Detailed information on map feature selection

### **Timeline Visualization**
- **Historical Data**: Day-by-day case progression
- **Multi-metric Tracking**: Cases, recoveries, and deaths over time
- **Interactive Controls**: Zoom, pan, and data export features

## 🛠️ Technical Implementation

### **State Management**
```javascript
// Vuex store structure
state: {
  nepal_stats: [],      // Nepal statistics
  global_stats: [],     // Global overview
  country_stats: [],    // All countries data
  top10_countries: []   // Top affected countries
}
```

### **API Integration**
```javascript
// Nepal data fetching
axios.get('https://data.nepalcorona.info/api/v1/covid')
axios.get('https://nepalcorona.info/api/v1/data/nepal')

// Global data fetching
axios.get('https://api.covid19api.com/summary')
```

### **Chart Configuration**
- **ECharts Integration**: Professional data visualization
- **Responsive Design**: Auto-resize and mobile optimization
- **Export Capabilities**: Save charts as images
- **Interactive Features**: Zoom, pan, data point inspection

### **Map Implementation**
- **Leaflet Integration**: High-performance mapping
- **Multiple Tile Providers**: OpenStreetMap, CartoDB, Stadia Maps
- **GeoJSON Support**: District and province boundary data
- **Choropleth Visualization**: Data-driven color mapping

## 🔧 Configuration

### **Environment Variables**
```bash
# Production port (default: 8080)
PORT=8080

# API endpoints can be configured in component files
```

### **Build Configuration**
```javascript
// vue.config.js
module.exports = {
  transpileDependencies: [
    "vuetify",
    "vue-echarts",
    "resize-detector"
  ]
}
```

## 📈 Performance Features

- **Lazy Loading**: Route-based code splitting
- **PWA Support**: Service worker for offline capability
- **Responsive Design**: Mobile-first approach
- **Efficient State Management**: Optimized Vuex store
- **Chart Optimization**: Auto-resize and performance tuning

## 🌍 Multi-language Support

- **English Interface**: Primary language
- **Nepali Content**: FAQ section includes Nepali translations
- **Expandable**: Architecture supports additional languages

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Rohit Khati** - [ro-hit81](https://github.com/ro-hit81)

## 🙏 Acknowledgments

- **Data Providers**: Nepal Corona Info, COVID-19 API
- **Vue.js Community**: Framework and ecosystem
- **Vuetify Team**: Material Design components
- **ECharts Team**: Professional charting library
- **Leaflet Community**: Interactive mapping solution
- **Nepal Government**: Official health data and statistics

## 📞 Support

For support, questions, or contributions:
- Create an issue in the GitHub repository
- Contact the maintainer through GitHub

---

**Note**: This application was developed during the COVID-19 pandemic to provide accessible, real-time information about the situation in Nepal and globally. The data visualization and user interface design prioritize clarity and ease of use for the general public.
