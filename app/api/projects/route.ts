import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const response = await fetch("https://api.github.com/users/RDrohan/repos", {
    cache: "force-cache",
  });
  const data = await response.json();
  const filteredData = data.map((item: any) => {
    return {
      name: item.name,
      url: item.html_url,
      description: item.description,
      language: item.language,
    };
  });
  return NextResponse.json(filteredData);
}
