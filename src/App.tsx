import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    date: "2021-07-11",
    sales_count: 53,
  },

  {
    date: "2021-07-12",

    sales_count: 42,
  },

  {
    date: "2021-07-13",

    sales_count: 88,
  },

  {
    date: "2021-07-14",

    sales_count: 14,
  },

  {
    date: "2021-07-15",
    sales_count: 77,
  },

  {
    date: "2021-07-16",
    sales_count: 68,
  },

  {
    date: "2021-07-17",
    sales_count: 43,
  },
];

function App() {
  return (
    <div
      style={{
        padding: "100px",
      }}
    >
      <ResponsiveContainer width={"100%"} aspect={3}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray={2}></CartesianGrid>
          <XAxis dataKey={"date"} interval="preserveStartEnd"></XAxis>
          <YAxis></YAxis>
          <Tooltip></Tooltip>

          <Legend></Legend>
          <Bar type="" dataKey={"sales_count"} fill="purple" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default App;
