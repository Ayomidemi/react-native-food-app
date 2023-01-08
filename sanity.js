import client from '@sanity/client';

export default client({
  projectId: 'wf893j3t',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2021-10-12',
});
