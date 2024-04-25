// 'use client';
import { Card } from '@tremor/react';
import { useSelector } from 'react-redux';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const data = [
  {
    name: 'Sales',
    value: '€ 34.1K',
    change: '+6.5%',
    changeType: 'positive',
  },
  {
    name: 'Cash',
    value: '500.1 K',
    change: '+19.4%',
    changeType: 'positive',
  },
  {
    name: 'Pruchases',
    value: '€ 34.5',
    change: '-1.7%',
    changeType: 'negative',
  },
];

export default function KpiCards() {
  const {sales, purchases} = useSelector(state => state.stock)
  const totalSales = sales?.reduce((acc, item)=> acc + item.amount,0 )
  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => (
          <Card key={item.name}>
            <p className="flex items-start justify-between">
              <span className="text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
                {item.value}
              </span>
              <span
                className={classNames(
                  item.changeType === 'positive'
                    ? 'text-emerald-700 dark:text-emerald-500'
                    : 'text-red-700 dark:text-red-500',
                  'text-tremor-default font-medium',
                )}
              >
                {item.change}
              </span>
            </p>
            <p className="mt-1 text-tremor-default text-tremor-content dark:text-dark-tremor-content">
              {item.name}
            </p>
          </Card>
        ))}
      </div>
    </>
  );
}