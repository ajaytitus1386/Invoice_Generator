<hr>
<h1 style="text-align:center;width:100%;">Invoice Generator</h1>
<hr>

- [:rocket: Getting Started](#rocket-getting-started)
- [:ledger: Project Structure](#ledger-project-structure)
  - [:page_facing_up: Pages](#page_facing_up-pages)
    - [Invoice Generator](#invoice-generator)
  - [:gear: Services](#gear-services)
    - [Hooks](#hooks)
    - [Products](#products)
  - [:open_file_folder: Models](#open_file_folder-models)

## :rocket: Getting Started

1. Clone the repository from `https://github.com/ajaytitus1386/Invoice_Generator` using your preferred method.

2. Next, navigate to the root of the project and install the dependencies:

   ```bash
   yarn install
   ```

3. Then, run the **development server**:

   ```bash
   yarn dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see a development preview.

<hr>

Or just head to [https://invoice-generator-dusky.vercel.app/](https://invoice-generator-dusky.vercel.app/) to see the **deployed build**!

## :ledger: Project Structure

### :page_facing_up: Pages

The first page visited by a user is the landing page `/index.tsx` which shows the user any saved invoices if present in local storage. The user can then enter a Customer name and will be redirected to the Invoice Generator

#### Invoice Generator

The main feature of this project which is divided into two sections: Invoice Edit and Preview

Invoice Edit allows the details of the invoice such as its name and the products and their quantities to be changed. Once Save Changes and Save Invoice is clicked, a new entry is made in the local storage of the browser.

Invoice Preview allows the user to see what the non-editable version of the invoice would look like. This same view is used on the Landing page for any saved invoices.

<hr>

### :gear: Services

#### Hooks

Re-usable and parametrized functions that can be used to manipulate or control data, in particular with the list of rides fetched.
Includes functionality such as:

- Fetch invoices saved to local storage of the browser
- Push a new invoice to saved invoices in local storage

#### Products

API calls made to https://fakestoreapi.com/ to fetch details to populate the product dropdowns

<hr>

### :open_file_folder: Models

A set of data object templates to enforce type safety when handling fetched API response data.
