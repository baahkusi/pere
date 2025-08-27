#!/usr/bin/env node

const { execSync } = require('child_process');
const { config } = require('dotenv');

// Load environment variables
config({ path: './.env.local' });

const hasGraphQLUrls = process.env.GRAPH_URL_PERENNIAL || process.env.GRAPH_URL_PERENNIAL_SEPOLIA;

if (hasGraphQLUrls) {
  console.log('GraphQL URLs found, running codegen...');
  try {
    execSync('graphql-codegen --config graph-codegen.ts', { stdio: 'inherit' });
  } catch (error) {
    console.error('GraphQL codegen failed:', error.message);
    process.exit(1);
  }
} else {
  console.log('No GraphQL URLs found, skipping codegen...');
  console.log('Using stub GraphQL types. To enable GraphQL codegen, set GRAPH_URL_PERENNIAL and/or GRAPH_URL_PERENNIAL_SEPOLIA in .env.local');
}