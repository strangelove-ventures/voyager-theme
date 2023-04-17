import { Button, Container, Flex, Heading, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";

const Page: NextPage = () => {
  return (
    <Container maxW="container.lg" py={8}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heading pb={8}>Lorem ipsum dolor sit amet consectetur.</Heading>
      <Text pb={4}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis obcaecati eius facere, architecto est,
        illum sunt provident in animi, optio tenetur natus? Ipsum quibusdam nesciunt debitis rerum maiores. Laborum
        illum quae odio quaerat blanditiis ratione quam veniam nobis amet minus eos sunt doloremque commodi voluptates
        quas libero, quis ut magnam dignissimos. Quidem ipsa aliquid, excepturi quisquam aspernatur earum totam illum!
      </Text>
      <Text pb={4}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. At quo alias ducimus quia debitis quas voluptatum,
        facilis excepturi aliquid quaerat quis et vitae aut repellendus quibusdam, velit consequuntur quidem eos
        voluptate expedita itaque! Nisi assumenda aliquam recusandae fuga aperiam corrupti fugit, eligendi natus debitis
        esse ipsa autem ut. Molestiae corporis eius tempora! Magnam amet ex aliquid officia minus magni tenetur.
      </Text>
      <Text pb={4}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptate id quo explicabo at vel molestias
        numquam. Minima aspernatur fuga harum est dignissimos voluptate soluta. Odio at inventore consectetur eum
        accusantium aspernatur natus voluptatum quidem voluptas excepturi numquam, distinctio quam cumque, illo itaque
        nemo maxime dicta tenetur fugiat fugit quisquam unde illum! Doloremque in, qui totam porro alias modi dolorem?
      </Text>
      <Flex flexDirection="column" alignItems="flex-start" gap={2}>
        <Button>Look, a primary button!</Button>
        <Button isDisabled>Look, a disabled primary button!</Button>
        <Button variant="secondary">Look, a secondary button!</Button>
        <Button variant="secondary" isDisabled>
          Look, a disabled secondary button!
        </Button>
      </Flex>
    </Container>
  );
};

export default Page;
