|<img src="https://github.com/identicons/jasminealee.png" width=100 alt="GitHub identicon for author jasminealee">|
|:-----:|
| [**jasminealee**](https://github.com/jasminealee) |


## Forensic-Static

###### Capstone Project Initialized on May , 2019.

#### By Jasmine Lee
----------

## Description
A application that will in the future allow a user to create a forensic profile, contact me if they have questions, and view other forensic profiles. They will also have the option to sign in / create a personal account. At the moment, the application shows a hard coded example of a forensic profile and the forms for contact me and of creating a forensic profile, both of which are static.

## Component Tree
![Component-Tree](/images/component-tree.png)

## Planning Repo
https://github.com/jasminealee/forensic-planning

## Specifications
<details>
<summary>User Stories and Specifications</summary>

  <table>
    <tr>
      <th> Scenario 01 </th><th></th>
    </tr>
    <tr>
      <td> Behavior </td>
      <td>User views the list of hard coded forensic profiles.</td>
    </tr>
    <tr>
      <td> Input </td>
      <td>User Clicks "Profile List".</td>
    </tr>
    <tr>
      <td> Output </td>
      <td>User is redirected to "/" and sees a list of all hard coded forensic profiles.</td>
    </tr>
  </table>

  <table>  
    <tr>
      <th> Scenario 02 </th><th></th>
    </tr>
    <tr>
      <td> Behavior </td>
      <td>User views the contact form.</td>
    </tr>
    <tr>
      <td> Input </td>
      <td>User Clicks "Contact".</td>
    </tr>
    <tr>
      <td> Output </td>
      <td>User is redirected to "/contact" and sees the form they should fill out (in the future once state functions properly) if they have any questions. My email is provided.</td>
    </tr>
  </table>  

  <table>  
    <tr>
      <th> Scenario 03 </th><th></th>
    </tr>
    <tr>
      <td> Behavior </td>
      <td> User views the new profile form. </td>
    </tr>
    <tr>
      <td> Input </td>
      <td> User clicks "Create Profile".</td>
    </tr>
    <tr>
      <td> Output </td>
      <td> The user is redirected to "/newprofileform" and sees the form they should fill out (in the future once state functions properly) to create a new forensic profile. </td>
  </table>

  <table>  
    <tr>
      <th> Scenario 04 </th><th></th>
    </tr>
    <tr>
      <td> Behavior </td>
      <td> User views a page that is not a part of the application. </td>
    </tr>
    <tr>
      <td> Input </td>
      <td> User types http://localhost:8080/#/pie into the url. </td>
    </tr>
    <tr>
      <td> Output </td>
      <td> The application redirects to an Error404 message stating the desired page does not exist and provides a link to the home page(Profile List).</td>
  </table>    
</details>

## Setup and Use
* Open GitHub and go to https://github.com/jasminealee/forensic-static and click `clone or download`; copy the url provided.
* Go to Terminal and clone the folder by inputting `$ git clone https://github.com/jasminealee/forensic-static` then enter.
* Navigate to project directory in Terminal by typing `$ cd ` then enter.
* Input the command `$ npm install` then enter.
* Input the command `$ npm run start` then enter.
* Navigate to the local host that terminal provides to see the application.

##Languages/Libraries Used
* Terminal
* Atom
* CSS
* Webpack
* React
* JSX
* JavaScript
* Hot Module Replacement

## Known Bugs

## Contact
If you have any questions or concerns please contact me at: [jasmine.al1722@gmail.com](mailto:jasmine.al1722@gmail.com)

## License
This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Copyright (C) 2019 Jasmine Lee. All Rights Reserved.

Copyright (c) 2019 [Jasmine Lee](https://github.com/jasminealee)
