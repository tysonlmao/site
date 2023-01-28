import Head from 'next/head';
import '../styles/Home.module.css';
import Nav from '../components/nav';
import ChevronDown from '../public/chevron-down.svg';
import React, { useState } from 'react';
import Stats from '../components/stats';
import { GetStaticProps, NextPage } from 'next';
import {GraphQLClient, gql} from 'graphql-request';

export async function getStaticProps() {
  
  const endpoint = process.env.HYPIXEL_PLAYER_ENDPOINT as string;
  const graphQLClient = new GraphQLClient(endpoint);
  graphQLClient.setHeader('X-GQL-Token', process.env.HYPIXEL_API_KEY as string);

  const query = gql`
  query player($key: String!, $uuid: String!) {
    player(key: $key, uuid: $uuid) {

    }
  }
  `;

  const variables = {
    key: process.env.HYPIXEL_API_KEY,
    uuid: process.env.HYPIXEL_UUID
  };

  fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-GQL-Token': process.env.HYPIXEL_API_KEY
    },
    body: JSON.stringify({
      query,
      variables
    })
  })
  .then(res => res.json())
  .then(data => {
    const displayname = data.player.displayname;
    console.log(displayname);
  })

  return {
    props: { }
  };
}

export default function Home() {
  const [show, setShow] = useState(false);
  function toggle(){
    setShow(!show);
  }
  return (
    <>
      <Head>
        <title>tysonlmao.dev</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="page-content">
        <Nav/>
        <div className="h2-center">
          <h2>tysonlmao</h2>  
          <br />
          <button className="glow-button"><a href="https://github.com/tysonlmao" target="_blank">GitHub</a></button>
          <button className="glow-button"><a href="https://twitter.com/tysonlmfao" target="_blank">Twitter</a></button>
          <button className="glow-button"><a href="#">Discord</a></button>
          <br className="spacer-2rem"/>
          <a onClick={toggle}><ChevronDown className="button-reset icon-svg"/></a>
        </div>

        <div className="stats" style={{display: show?"block":"none"}}>
          <Stats />
        </div>
      </div>
    </>
  )
}
