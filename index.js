const { Configuration, OpenAIApi } = require("openai");

const config = new Configuration({
  apiKey: "api-key",
});

const openai = new OpenAIApi(config);

const runPrompt = async () => {
  const prompt = `
I will be giving you a set of rating criteria for the job role of "Software Architecture".
You will then give me a rating telling me if it is Level 0, Level 1, Level 2, Level 3, Level 4 or Level 5 base on my given input.

The rating criterias are as follows:
These are the given criteria for the job role of "Software Architecture". In order to progress to a higher level criteria, an individual must have already met and demonstrated proficiency in the criteria specified for the lower levels:

Level 1 criteria:
- Understand various non-functional requirements and related architecture considerations: At this level, a software architect should have a solid understanding of different non-functional requirements such as performance, scalability, security, and maintainability. They should be aware of the architectural considerations needed to address these requirements effectively.
- Design simple software architecture: A Level 1 software architect is capable of designing simple software architectures. They can define the high-level structure of the software, including the main components, their interactions, and the overall system organization.
- Implement software architecture designs with guided supervision: A Level 1 software architect is able to implement software architecture designs, but they may still require some supervision or guidance from more experienced architects or senior team members.

Level 2 criteria:
- Identify various non-functional requirements and related architecture considerations: A Level 2 software architect can actively identify different non-functional requirements specific to a project or product. They can recognize how these requirements influence architectural decisions and design choices.
- Develop software architecture designs for a single product: At this level, a software architect can create comprehensive and detailed software architecture designs for a single product. They consider factors like system components, data flow, interfaces, and integration points.
- Implement software architecture designs independently: A Level 2 software architect is capable of independently implementing the software architecture designs they have created. They can translate the design into working code and ensure that the implemented system aligns with the intended architecture.

Level 3 criteria:
- Define non-functional requirements which are relevant to specific products: A Level 3 software architect can define specific non-functional requirements that are tailored to the unique characteristics and goals of a particular product. They have the expertise to identify and prioritize these requirements based on the project's context.
- Analyze the architecture trade-offs and choices, and articulate technical decisions to the rest of the team to help them understand: At this level, a software architect can evaluate various architectural trade-offs and choices. They are skilled at making informed technical decisions and effectively communicating those decisions to the rest of the team, helping them understand the rationale behind the chosen architecture.

Level 4 criteria:
- Anticipate and prepare for the next evolution of software architecture trends: A Level 4 software architect is proactive in staying up-to-date with the latest trends, advancements, and emerging technologies in the field of software architecture. They can anticipate future changes and incorporate them into their architectural planning and decision-making.
- Drive a product all the way from creation of engineering concepts to the final launch of it, as well as post-launch monitoring and analysis: At this level, a software architect takes ownership of the entire lifecycle of a product. They actively participate in the creation of engineering concepts, oversee the development process, and ensure successful product launch. They also conduct post-launch monitoring and analysis to identify areas of improvement.
- Develop detailed requirement documents and identify and translate market requirements into product’s goals: A Level 4 software architect is proficient in capturing detailed requirements, both functional and non-functional, and translating them into clear goals for the product. They understand the market needs and align the software architecture with the overall product strategy.
- Mandatory to be at least a national hackathon champion 

Level 5 criteria:
- In order to progress to a higher level criteria, an individual must have already met and demonstrated proficiency in the criteria specified for the lower levels
- Refine strategic proposals and make improvements/recommendations down the line: At this level, a software architect contributes to refining strategic proposals related to software architecture. They assess the current state of the architecture, identify areas for improvement, and provide recommendations to enhance the architecture's alignment with business goals

Level 0 criteria:
- Did not meet any of the criteria stated in Level 1, Level 2 and Level 3

Please give me the rating for the following input:
Won national badminton championship in 2022 
    `;

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
    max_tokens: 2048,
    temperature: 0.2,
  });

  console.log(response.data);
};

runPrompt();

// input:
// - able to articulate tradeoff between different solution
// - have hands on experience with different messaging protocol such as RabbitMQ and Kafka
// output:
// Level 3

// input:
// - able to discuss software architecture trade off with team members
// - occasionally need help from team lead with solutioning
// - come up with architecture design for Project Green Movement
// output:
// Level 2

// input:
// - implement solution given by team lead
// - understand the importance of software architecture but have not done any solutioning at all
// - understand the software architecture trade off being discussed
// output:
// Level 1

// input:
// - play basketball at national level
// - win world championship for formula one racing
// - record holder for eating most durian
// output:
// Level 0
