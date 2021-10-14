import { useRouter } from "next/dist/client/router";

function NewsDetails() {
  const routeVal = useRouter();
  return (
    <>
      <h1>This is a News Detail Page of Route {routeVal.query.newsId}</h1>
    </>
  );
}

export default NewsDetails;
