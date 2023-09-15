import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";
import { google } from "googleapis";
import { cookies } from "next/headers";
import Layout from "@/layouts/Layout";
async function getData() {
  // Fetch data from your API here.

  let googleSheets;
  let spreadsheetId;
  let auth;

  const googleApiInitialize = async () => {
    // google api intiallization
    auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.CLIENT_EMAIL,
        private_key: process.env.PRIVATE_KEY.replace(/\\n/g, "\n")
      },
      scopes: "https://www.googleapis.com/auth/spreadsheets"
    });

    // Create client instance for auth
    // const client = await auth.getClient();

    // Instance of Google Sheets API
    googleSheets = google.sheets({ version: "v4", auth });

    spreadsheetId = "1eED-7pFb_yj_RlfDciCfr7NStskXmLunt2s9Yo4valo";
  };

  await googleApiInitialize();

  const getRows = await googleSheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range: "Street_final"
  });

  let isWomens = false;
  const data = await getRows.data.values
    .filter((item, index) => {
      if (item.includes("Девушки")) {
        isWomens = true;
      }

      if (isWomens && Number(item[0])) return true;
    })
    .map((item) => {
      return {
        name: item[1],
        surname: item[2],
        firstAvarageBestTrick: item[38],
        secondAvarageBestTrick: item[39],
        thirdAvarageBestTrick: item[40],
        fourthAvarageBestTrick: item[41],
        fifthAvarageBestTrick: item[42],
        firstAvarageRun: item[43],
        secondAvarageRun: item[44],
        finalScore: item[45]
      };
    });

  console.log(data);

  //   return [
  //     {
  //       name: "alex",
  //       surname: "alex surname",
  //       firstAvarageScore: 10,
  //       secondAvarageScore: 22,
  //       thirdAvarageScore: 11,
  //       fourthAvarageScore: 5,
  //       fifthAvarageScore: 0,
  //       finalScore: 99
  //     },
  //     {
  //       name: "eva",
  //       surname: "eva surname",
  //       firstAvarageScore: 10,
  //       secondAvarageScore: 22,
  //       thirdAvarageScore: 11,
  //       fourthAvarageScore: 5,
  //       fifthAvarageScore: 0,
  //       finalScore: 100
  //     },

  //   ];
  return data;
}

export default async function DemoPage() {
  const data = await getData();
  console.log(data, "-------------------- women-street-results page load");
  const cookieStore = cookies();
  //   console.log(cookieStore.getAll())

  //   const response = await fetch("/api/men-park-results", {
  //     cache: "no-store"
  //   });
  //   const readyData = await response.json();
  //   console.log(readyData);

  return (
    <Layout>
      <div className="container w-screen h-screen">
        <DataTable columns={columns} data={data} />
      </div>
    </Layout>
  );
}
