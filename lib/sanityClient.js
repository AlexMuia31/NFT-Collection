import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "7ebuzle0",
  dataset: "production",
  apiVersion: "2021-03-25",
  token:
    "sktYsXwk6yVDM3r3pqp4EBSxtRGuTrzqAiCNx3EM93mgpP0kkKxvAxDSSAPvL4fM252Fk1TUxrjh7j9XILUTO7KzPjsZfTvFptgyJvaUhgpJYi1gYl9eXiUF93uWLA8xZRRJQcaWfQPr5Jbgk2Q72Zgfn49NGeLI2vhVUSEjkJBsCVFQhEYJ",
  useCdn: false,
});
