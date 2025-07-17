'use client';

import { Bar, BarChart, XAxis } from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/shared/components/ui/card';
import {
  type ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@/shared/components/ui/chart';

export const description = 'A stacked bar chart with a legend';

const chartData = [
  { date: '2024-07-15', Perizinan: 450, Mahasiswa: 300 },
  { date: '2024-07-16', Perizinan: 380, Mahasiswa: 420 },
  { date: '2024-07-17', Perizinan: 520, Mahasiswa: 120 },
  { date: '2024-07-18', Perizinan: 140, Mahasiswa: 550 },
  { date: '2024-07-19', Perizinan: 600, Mahasiswa: 350 },
  { date: '2024-07-20', Perizinan: 480, Mahasiswa: 400 },
];

const chartConfig = {
  Perizinan: {
    label: 'Perizinan',
    color: 'var(--color-gr-01)',
  },
  Mahasiswa: {
    label: 'Mahasiswa',
    color: 'var(--color-gr-05)',
  },
} satisfies ChartConfig;

export function DashboardChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-4xl text-gr-05">Data Harian</CardTitle>
        <CardDescription className="text-black text-lg">
          RAJA Brawijaya
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <XAxis
              dataKey="date"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => {
                return new Date(value).toLocaleDateString('id-ID', {
                  weekday: 'long',
                });
              }}
            />
            <Bar
              dataKey="Perizinan"
              stackId="a"
              fill="var(--color-Perizinan)"
              radius={[0, 0, 4, 4]}
            />
            <Bar
              dataKey="Mahasiswa"
              stackId="a"
              fill="var(--color-Mahasiswa)"
              radius={[4, 4, 0, 0]}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  hideLabel
                  className="w-[180px]"
                  formatter={(value, name, item, index) => (
                    <>
                      {index === 0 && (
                        <div className="border-b flex basis-full pb-1.5 text-xs font-medium">
                          {new Date(item.payload.date).toLocaleDateString(
                            'id-ID',
                            {
                              weekday: 'long',
                              month: 'long',
                              day: 'numeric',
                              year: 'numeric',
                            },
                          )}
                        </div>
                      )}
                      <div
                        className="h-2.5 w-2.5 shrink-0 rounded-[2px] bg-(--color-bg)"
                        style={
                          {
                            '--color-bg': `var(--color-${name})`,
                          } as React.CSSProperties
                        }
                      />
                      {chartConfig[name as keyof typeof chartConfig]?.label ||
                        name}
                      <div className="text-foreground ml-auto flex items-baseline gap-0.5 font-mono font-medium tabular-nums">
                        {value}
                        <span className="text-muted-foreground font-normal">
                          orang
                        </span>
                      </div>
                      {index === 1 && (
                        <div className="text-foreground mt-1.5 flex basis-full items-center border-t pt-1.5 text-xs font-medium">
                          Total
                          <div className="text-foreground ml-auto flex items-baseline gap-0.5 font-mono font-medium tabular-nums">
                            {item.payload.Perizinan + item.payload.Mahasiswa}
                            <span className="text-muted-foreground font-normal">
                              orang
                            </span>
                          </div>
                        </div>
                      )}
                    </>
                  )}
                />
              }
              cursor={false}
              defaultIndex={1}
            />
            <ChartLegend
              className=" justify-start text-sm"
              content={<ChartLegendContent />}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
