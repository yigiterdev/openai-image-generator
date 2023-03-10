import "./_home-page.scss";

import {Button, Input, Spinner, useToast} from "@chakra-ui/react";
import {useState} from "react";

import {openai} from "../core/api/openai/openaiApi";
import BrushIcon from "../core/components/icons/BrushIcon";
import {ImagesResponseDataInner} from "openai";

function HomePage() {
  const [query, setQuery] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [data, setData] = useState<ImagesResponseDataInner[]>([]);
  const toast = useToast();

  return (
    <div>
      <h1 className="home-page__title">OpenAI Image Generator</h1>

      <p className="home-page__description">
        Image generator which is created by using OpenAI API's
      </p>

      <div className="home-page__form">
        <Input
          value={query}
          focusBorderColor={"teal.500"}
          onChange={handleInputChange}
          placeholder={"Search for generate 8 image"}
          size={"lg"}
        />

        <Button
          className={"home-page__form__button"}
          colorScheme={"teal"}
          size={"lg"}
          onClick={fetchData}
          isLoading={isPending}
          loadingText={"Generating"}>
          <BrushIcon />
          Generate
        </Button>
      </div>

      {isPending && (
        <div className="home-page__spinner-wrapper">
          <Spinner color="teal.500" />
        </div>
      )}

      {data && !isPending && (
        <div className="home-page__image-list">
          {data.map((item, index) => {
            return (
              <img
                key={index}
                src={item.url}
                alt={item.url}
                className="home-page__image-list__item"
                loading="lazy"
              />
            );
          })}
        </div>
      )}
    </div>
  );

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setQuery(event.target.value);
  }

  async function fetchData() {
    try {
      setData([]);
      setIsPending(true);
      const response = await openai.createImage({
        prompt: query,
        n: 8,
        size: "1024x1024"
      });

      setData(response.data.data);
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        status: "error",
        duration: 9000,
        isClosable: true,
        position: "top"
      });
    } finally {
      setIsPending(false);
    }
  }
}

export default HomePage;
