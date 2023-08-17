# Problem Link :- https://near-ethernet-088.notion.site/Plan-My-Trip-9212dd3549fa495d84b1d2feaf8f66b2

# Plan My Trip

## Instructions:

- Read each and every line of question carefully, missing any functionality which was asked will reduce your overall marks.
- Use **React** for frontend.
- Use **Chakra UI** or **MUI** as UI library. (optional)
- Use **Node, Express, Mongo (NEM)** as backend.

---

## Problem Statement:

The task is to create a small Full-Stack web application, where users can post details of their travel destination, and other users can access it. The frontend of the app should be implemented using React, and Node, Express, Mongo (NEM) as backend.

### Frontend:

- You’re building a single page application with two components
    - **Post Data**
    - **Retrieve Data**
- The **`Post Data`** component should have a form with the following fields
    - Name
    - Email Address
    - Destination
        - This is a dropdown with the following values: India, Africa, Europe, America as options
    - No. of travelers
    - Budget Per Person
    - Submit Button
    - On form submit, store the data in your backend.

- The **`Retrieve Data`** components (Append it below the `Post Data` component) should render all the form submissions with all the details in the form of cards.
- There should be a “**Delete**” button appended to each card, which when clicked delete the specific card from the backend as well as from the UI.
- The user should be able to filter the data based on destination, and the functionality should be implemented using backend API’s.
- The user should be able to sort the data based on the budget per person.
- Both Filter and Sort functionality should work together seamlessly and should be implemented through Backend API’s. (Implementing these functionalities in frontend won’t be considered)

---

### Backend:

- Create the following API’s
    - Post API
    - Retrieve API
    - Delete API
    - Filter Data
    - Sort Data

---

### Submission

- Please submit deployed link and GitHub link of code.
- ****Deploy both Frontend and Backend.**
- Please double check if deployed version works or not (run deployed version on your laptop and then submit it).
- Any issues in deployed link, will be considered null and void.
- Please verify your submissions are correct.
- Make sure you follow all instructions carefully.
- Submit before deadline.

### Rubrics / Criteria to be judged upon

- React
- React Hooks and States
- Node, Express, Mongo (NEM)
- Backend API’s
- Folder Structure and Code cleanliness