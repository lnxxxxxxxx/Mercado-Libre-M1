import React from "react";
import { Stack, Icon, Link, Image } from "@chakra-ui/react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import logo from "assets/asd.svg";

export default function PersonalLinks() {
  return (
    <Stack
      align="center"
      bg="white"
      borderInlineEndRadius={8}
      boxShadow="lg"
      height="180px"
      justify="space-evenly"
      left="0"
      position="fixed"
      top="calc(50% - 90px)"
      width="50px"
    >
      <Link
        _focus={{}}
        _hover={{
          transform: "scale(1.2,1.2)",
        }}
        href="https://www.linkedin.com/in/leandro-matias-luna-a572731a5/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <Icon as={AiFillLinkedin} boxSize={10} color="black" />
      </Link>
      <Link
        _focus={{}}
        _hover={{
          transform: "scale(1.2,1.2)",
        }}
        href="https://github.com/lnxxxxxxxx"
        rel="noopener noreferrer"
        target="_blank"
      >
        <Icon as={AiFillGithub} boxSize={10} color="black" />
      </Link>
      <Link
        _focus={{}}
        _hover={{
          transform: "scale(1.2,1.2)",
        }}
        href="https://leandrmtln.vercel.app/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <Image height="35px" src={logo} width="35px" />
      </Link>
    </Stack>
  );
}
