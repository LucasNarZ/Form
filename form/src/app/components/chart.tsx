'use client';

import { useEffect, useRef } from 'react';
import Chart, {ChartItem, ChartData } from 'chart.js/auto';
import 'tailwindcss/tailwind.css';

interface chartprops{
    data:ChartData<"bar">;
    type:any;
}


export const ChartComponente = ({ data, type }:chartprops) => {
    const chartref = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if(chartref.current){
            const ctx = chartref.current.getContext("2d") as CanvasRenderingContext2D;
            new Chart(ctx, {
                type:type,
                data:data,
                options: {
                    plugins: {
                        legend: {
                            labels: {
                                font: {
                                    size: 30
                                }
                            }
                        }
                    }
                }
            })
        }
    }, [data])
    return <canvas ref={chartref} className={type}/>
}