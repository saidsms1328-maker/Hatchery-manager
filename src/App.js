import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, LineChart, Line, Legend } from "recharts";

export default function App() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">🐣 Hatchery Manager</h1>
      <p>This is a demo version of your hatchery management system.</p>
      <p>Here you will be able to add batches, track fertility, hatchability, candling, culls, breakout analysis and generate reports.</p>
    </div>
  );
}
