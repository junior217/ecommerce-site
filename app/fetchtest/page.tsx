export default async function FetchTest() {
  const res = await fetch("http://localhost:3000/api/hello");
  const data = await res.json();

  return <h1>{data.message}</h1>;
}
