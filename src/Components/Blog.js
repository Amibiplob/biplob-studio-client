import React from 'react';

const Blog = () => {
    return (
      <div className="flex flex-col gap-1 w-11/12 mx-auto my-10">
        <div className="collapse collapse-plus border rounded-box">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            Q1: Difference between SQL and NoSQL
          </div>
          <div className="collapse-content">
            <p>
              <span className="font-bold">Ans : </span>The five critical
              differences between SQL and NoSQL are: <br />
              1: SQL databases are relational; NoSQL databases are
              non-relational.
              <br />2 : SQL databases have a predefined schema and use
              structured query language.NoSQL databases have dynamic schemas for
              unstructured data.
              <br />3 : SQL databases are vertically scalable, while NoSQL
              databases are horizontally scalable.
              <br />4 : SQL databases are table-based, while NoSQL databases are
              document, key-value, graph, or wide-column stores.
              <br />5 : SQL databases are better for multi-row transactions,
              while NoSQL is better for unstructured data like documents or
              JSON.
              <br />
            </p>
          </div>
        </div>

        <div className="collapse collapse-plus border rounded-box">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            Q2 : What is JWT, and how does it work?
          </div>
          <div className="collapse-content">
            <p>
              <span className="font-bold">Ans : </span>JSON Web Token (JWT)
              is an open standard (RFC 7519) for securely transmitting
              information between parties as a JSON object. It is compact,
              readable, and digitally signed using a private key or a public key
              pair by the identity provider (IdP).
            </p>
          </div>
        </div>

        <div className="collapse collapse-plus border rounded-box">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            Q3 : What is the difference between JavaScript and NodeJS?
          </div>
          <div className="collapse-content">
            <p>
              <span className="font-bold">Ans : </span>JavaScript is a simple
              programming language that can be used with any browser that has
              the JavaScript Engine installed. Node.js, on the other hand, is an
              interpreter or execution environment for the JavaScript
              programming language.
            </p>
          </div>
        </div>

        <div className="collapse collapse-plus border rounded-box">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            Q4 : How does NodeJS handle multiple requests at the same time?
          </div>
          <div className="collapse-content">
            <p>
              <span className="font-bold">Ans : </span>NodeJS receives multiple
              client requests and places them into an event queue. NodeJS is
              built on the concept of event-driven architecture. NodeJS has its
              own EventLoop, which is an infinite loop that receives requests
              and processes them. EventLoop is the listener for the event queue.
              If NodeJS can process the request without I/O blocking, then the
              event loop would itself process the request and send the response
              back to the client by itself. However, using the NodeJS cluster
              module or worker_threads module, multiple requests can be
              processed in parallel. 
            </p>
          </div>
        </div>
      </div>
    );
};

export default Blog;