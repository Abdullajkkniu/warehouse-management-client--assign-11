import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <h1 className='text-center fw-bold my-3'>Important Blogs</h1>
            <div className='border p-3 rounded my-4'>
                <h6>Question-1: what is the difference between javascript and nodejs?</h6>
                <p>Answer:javascript is a lightweight, cross-platform, interpreted scripting language. on the other hand node.js is a server-side scripting language based on the google crome v8 engine.
                    JavaScript is a simple programming language that could be run in any browser that supports the JavaScript Engine.On the other hand, Node.js is a running environment or interpreter for the JavaScript programming language.JavaScript can run on any engine.Node.js only supports the V8 engine </p>
                <br />
                <h6>Question-2: what is the difference between sql and nosql?</h6>
                <p>Answer:There are five practical differences between SQL and NoSQL:Language, Scalability,Structure,Properties,Support and communities. SQL has been around for over 40 years, so it is recognizable, documented, and widely-used.NoSQL databases allow representation of alternative structures, often alongside each other.Most SQL databases can be scaled vertically. NoSQL databases use a master-slave architecture. SQL databases can be scaled horizontally as well. NoSQL technologies are diverse and while many rely on the master-slave architecture</p>
                <br />
                <h6>Question-3: What is the purpose of jwt and how it works?</h6>
                <p>Answer: JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed
                    <br />
                    Here are some scenarios where JSON Web Tokens are useful: 1.Authorization: This is the most common scenario for using JWT.
                    <br />
                    2.Information Exchange: JSON Web Tokens are a good way of securely transmitting information between parties <br />
                    Because JWTs can be signed—for example, using public/private key pairs—you can be sure the senders are who they say they are

                </p>
            </div>
        </div>
    );
};

export default Blogs;