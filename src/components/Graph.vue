<script lang="ts">
    import type { ResidencyType } from '../types/HouseType'
    import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Filler } from 'chart.js'
    import { Line } from 'vue-chartjs'

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Filler
    );

    export default {
        props: ['residency'],
        name: 'Graph',
        components: { Line },
        data() {
            return {
                type: 'line',
                data: {
                    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                    datasets: [
                        {
                            label: 'Data One',
                            borderColor: 'rgba(14, 156, 255, 1)',
                            borderWidth: 2,
                            fill: true,
                            backgroundColor: 'rgba(14, 156, 255, 0.2)',
                            data: this.residency.map((item: ResidencyType) => item.birds) //[2, 4, 10, 5, 5, 2, 1]
                        },
                        {
                            label: 'Data Two',
                            borderColor: 'rgba(116, 79, 153, 1)',
                            borderWidth: 2,
                            fill: true,
                            backgroundColor: 'rgba(116, 79, 153, 0.2)',
                            data: this.residency.map((item: ResidencyType) => item.eggs)
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    cubicInterpolationMode: 'monotone',
                    scales: {
                        x: {
                            grid: {
                                color: 'rgba(255, 255, 255, 0.2)',
                            },
                            border: {
                                dash: [4, 2]
                            },
                            ticks: {
                                stepSize: 2,
                                font: {
                                    size: "12px",
                                    weight: "400",
                                    family: "Inter"
                                }
                            }
                        },
                        y: {
                            beginAtZero: true,
                            grid: {
                                color: 'rgba(255, 255, 255, 0.2)',
                            },
                            border: {
                                dash: [4, 2]
                            },
                            ticks: {
                                stepSize: 2,
                                font: {
                                    size: "12px",
                                    weight: "400",
                                    family: "Inter"
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</script>

<template>
    <Line :data="data" :options="options" />
</template>