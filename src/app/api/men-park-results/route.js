import { NextResponse } from "next/server";
export async function GET() {
  async function getData() {
    return [
      {
        id: 414343,
        name: "Alex",
        surname: "Ford",
        score: 10
      },
      {
        id: 424343,
        name: "Ilon",
        surname: "Mask",
        score: 12
      },
      {
        id: 434343,
        name: "Britni",
        surname: "Spears",
        score: 22
      },
      {
        id: 444343,
        name: "Jordge",
        surname: "Washington",
        score: 52
      }
    ];
  }
  const testData = await getData();

  let json_response = JSON.stringify({ data: "some data" });
  return NextResponse.json(JSON.stringify({ data: "data" }));
}
