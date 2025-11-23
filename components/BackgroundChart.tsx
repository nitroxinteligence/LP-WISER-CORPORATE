"use client";

import { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";

// Dados responsivos: Mobile = 12 dias, Desktop = 30 dias
const generateChartData = (isMobile: boolean) => {
  const days = isMobile ? 12 : 30;
  const data = [];
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - (days - 1));

  for (let i = 0; i < days; i++) {
    const currentDate = new Date(startDate);
    currentDate.setDate(startDate.getDate() + i);

    data.push({
      date: currentDate.toISOString().split('T')[0],
      blue: Math.floor(Math.random() * 300) + 150,
      gray: Math.floor(Math.random() * 250) + 100,
    });
  }
  return data;
};

const chartConfig = {
  blue: {
    label: "Blue",
    color: "#17358A",
  },
  gray: {
    label: "Gray",
    color: "#6B7280",
  },
} satisfies ChartConfig;

export function BackgroundChart() {
  const [chartData, setChartData] = useState(() => generateChartData(false));
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Detectar mobile
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setChartData(generateChartData(mobile));
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Animação de entrada com delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <div
      className={`absolute inset-0 opacity-0 transition-opacity duration-1500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{ pointerEvents: "none" }}
    >
      <ChartContainer
        config={chartConfig}
        className="absolute inset-0 w-full h-full"
      >
        <BarChart
          data={chartData}
          margin={{
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid
            vertical={false}
            stroke="#374151"
            strokeOpacity={0.2}
          />
          <XAxis
            dataKey="date"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            minTickGap={32}
            tick={false}
          />
          <Bar
            dataKey="blue"
            fill="#17358A"
            fillOpacity={0.6}
            radius={[4, 4, 0, 0]}
          />
          <Bar
            dataKey="gray"
            fill="#6B7280"
            fillOpacity={0.5}
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ChartContainer>
    </div>
  );
}
