import { Doughnut } from "vue-chartjs";
import { Chart, ArcElement } from 'chart.js'
Chart.register(ArcElement);
export default {
    extends: Doughnut,
    props: ["data", "options"],
    mounted() {
        // this.chartData is created in the mixin.
        // If you want to pass options please create a local options object

    }
};
