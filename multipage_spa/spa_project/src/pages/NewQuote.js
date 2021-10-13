import { useHistory } from "react-router";
import QuoteForm from "../components/quotes/QuoteForm";
import { addQuote } from "../lib/api";
import useHttp from "../hooks/use-http";
import { useEffect } from "react";
function NewQuote() {
  const { sendRequest, status } = useHttp(addQuote);
  const history = useHistory();
  useEffect(() => {
    if (status === "completed") {
      history.push("/quotes");
    }
  }, [status,history]);
  const handleQuoteForm = (data) => {
    sendRequest(data);
  };
  return (
    <>
      <QuoteForm isLoading={status === "pending"} onAddQuote={handleQuoteForm} />
    </>
  );
}

export default NewQuote;
