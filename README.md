# Multi project/product Test Automation Framework (UI)

## Features

<details>
  <summary>Framework features</summary><br/>

* Multi-product - many products in one repo, sharing base classes
* E2E flows - full user journeys (login, registration, health check), not isolated features
* Multi-geo - each flow runs across several geos (locale per geo, optional per-geo proxy)
* Cross-platform - same flow on web and mobile, Chrome and Safari (Webkit)
* Data-driven - specs loop over geo lists; user data is faker-generated
</details>


## Environment
<details>
  <summary>Environment details</summary><br/>

```
The following software should be installed:
```

* VS Code (preferably) - [VS Code download][0]
* GIT - [Git download][1]
* Node.js (LTS) - [Node download][2]
* Docker - [Docker download][7]

To check that all required items are installed properly, run the following commands one by one in your terminal:

`code --version`<br/>
`git --version`<br/>
`node -v`<br/>
`npm -v`<br/>
`docker --version`<br/>

You should see version numbers for all these items, without any errors.
</details>


## Installation
<details>
  <summary>Installation steps</summary><br/>

```
Main steps:
```

* You need to have access to the current repository (if not, ask the admin).
* You need to add your SSH key to your GitHub account (see guide below).
* You need to clone the repository to your local machine (see guide below).

```
Steps for adding the SSH key:
```

1) Generate a new SSH key and add it to the SSH agent - [guide][3]
2) Add the created SSH key to your GitHub account - [guide][4]
3) Test the SSH connection - [guide][5]

```
Steps for cloning the repository and installing dependencies:
```

1. Navigate to a folder where the Test Automation Framework (TAF) will be stored, and run in your terminal a copied link (with SSH key):<br/>
`git clone ...`

2. Navigate into the downloaded repository folder:<br/>
`cd ...`

3. Install all required project dependencies:<br/>
`npm install`

4. Install all required browsers for Playwright:<br/>
`npx playwright install`
</details>


## Git
<details>
  <summary>Git conventions</summary><br/>

For simplicity, we use branch and commit naming similar to CRUD (Create, Read, Update, Delete) operations when possible.<br/>

There will be exceptions, and if you have any doubts, don't hesitate to ask colleagues for clarification.<br/>

```
In branch naming, we try to describe what is being done (present) in simple words.
```

Branch naming examples:<br/>
`create_mobile_login_test`<br/>
`update_web_login_test`<br/>
`delete_test_results`<br/>

```
In commit naming, we try to describe what was done (past) and add any additional details if needed.
```

Commit naming examples:<br/>
`"created mobile login test (for ... products)"`<br/>
`"updated web login test (added ... geos)"`<br/>
`"deleted test results (partly)"`<br/>

```
PR (Pull Request) rules:
```
* Direct pushes and commits into the main branch are FORBIDDEN
* Commits should be merged into the main branch ONLY via PR
* PRs should be merged into the main branch ONLY via the `Squash and merge` option
* PR name should be described as the main commit name
* PR should contain Reviewers and Assignees
</details>


## Test Automation Framework (TAF)
<details>
  <summary>Global Implementation</summary><br/>

```
PACKAGES:
```
`playwright` (core package that provides the browser automation API):
* Browser automation capabilities<br/>
* Page manipulation methods<br/>
* Network interception<br/>
* Other low-level browser control features<br/>


`@playwright/test` (builds on top of the `playwright` package):
* Provides test organization features (describe, test, beforeAll, etc)<br/>
* Includes built-in assertions<br/>
* Handles test parallelization<br/>
* Manages test fixtures<br/>
* Provides test reporting<br/>
* Includes CLI for running tests<br/>


`@faker-js/faker` (library that generates fake/mock data for testing purposes):
* Creates test data and other dynamic content needed for testing<br/>


`allure-commandline` (package that converts raw test runs data into Allure reports):
* Takes raw result files and turns them into a human-friendly, visual report you can open and explore in your browser<br/>


`allure-playwright` ("bridge" package that helps to gather raw test runs data from Playwright):
* Collects detailed test data (steps, screenshots, logs, etc.), and saves it in a format that Allure understands<br/>
<br/>

```
FOLDER STRUCTURE:
```
* `test-classes` contains product-based web/mobile classes for use in tests<br/>
* `test-data` contains global-scoped data (products, proxies, etc) and test-scoped data (users, phones, etc)<br/>
* `test-suites` contains product-based web/mobile test suites<br/>
* `test-utils` contains fixtures (for setting up the test environment) and other global helpers<br/>
<br/>

```
NAMING CONVENTIONS:
```
`Root Folders:`<br/>
Use kebab-case (`test-classes`, `test-data`, `test-suites`, `test-utils`, etc).

`Non-root Folders (Sub-folders):`<br/>
Use camelCase (`base`, `fixtures`, `reportFolderGenerator`, etc).

`Class Files:`<br/>
Use camelCase with `[product][platform][flow]` pattern (`productWebLogin.js`, `productMobileRegistration.js`, etc).

`Test Files (spec files):`<br/>
Use camelCase with `[product][platform][flow]` pattern (`productWebLogin.spec.js`, `productMobileRegistration.spec.js`, etc).

`Other files`:<br/>
Use camelCase (`products.js`, `proxyFixture.js`, etc).

`Classes:`<br/>
Use PascalCase (`BaseLogin`, `BaseHealthCheck`, etc).

`Properties and Methods:`<br/>
Use camelCase (`enterEmail`, `clickSubmitButton`, etc).

`Test Names:`<br/>
Use `[Product] - [PLATFORM] - [TestFlow] - [Geo] : [locale]` pattern<br/> (`Product - MOBILE - Login - ${geo.name} : ${geo.locale}`, etc).
</details>

---

<details>
  <summary>Inner Implementation</summary><br/>

```
GENERAL APPROACHES:
```
`Geolocations and proxies usage:`
* Each product has a scope of used geolocations and can be found in the `test-data/products.js` file.
* All used and available proxies can be found in the `test-data/proxies.js` file.

`Product and Platform folder segregation:`
* Each product has a folder under `test-classes` (reusable classes) and `test-suites` (test cases).
* Each product folder is further divided into `web` and `mobile` sub-folders, reflecting the platform being tested.

`Page Object Model (POM) and reusable classes:`
* POM implementation is hybrid and based on reusable test cases instead of classical pages and components.
* `test-classes/base/` contains reusable classes across all products and platforms.
* `test-classes/[product]/[platform]/` contains reusable classes for a certain product and platform.

`Test Suites and Test Cases:`
* `test-suites/[product]/[platform]/` contains actual test suites.
* Each product has up to several geos. Tests in `spec` files loop across geos.
* Each `spec` file targets a specific feature or user flow.

`Fixtures and Utilities:`
* `test-utils/` contains different reusable helpers across the entire repository.
* `test-utils/fixtures/` contains specifically fixtures (common setup (proxies), teardown, etc)

`Test Data:`
* `test-data/` contains all static and dynamic test data (products, proxies, users, etc).

```
Object-Oriented Programming (OOP) PRINCIPLES:
```
* `Classes and Inheritance:`<br/> The codebase is structured around ES6 classes. There are base classes (`BaseClass`, `BaseHealthCheck`, `BaseLogin`, etc). There are product/platform-specific classes (`ProductWebLogin`, etc) which extend base classes, inheriting and specializing their behavior.
* `Encapsulation:`<br/> Each class encapsulates its own selectors and methods for interacting with the UI, keeping state and logic together.
* `Polymorphism:`<br/> Some methods (`submitPersonalDetails`, `verifyLogin`, etc) are defined in base classes and overridden in subclasses, allowing different implementations for different products/platforms.
* `Abstraction (partially):`<br/> While JS does not have true abstract classes, base classes define generic flow steps that subclasses override for product-specific behavior. Base classes can also use methods that throw errors until implemented - a manual abstraction pattern forcing subclasses to implement certain methods.

```
SOLID PRINCIPLES:
```
* `Single Responsibility Principle (SRP):`<br/> Each class is responsible for a single part of the test logic (login, registration, health check, etc).
* `Open/Closed Principle (OCP):`<br/> Base classes provide default implementations, and new behaviors are added by extending these classes rather than modifying them.
* `Liskov Substitution Principle (LSP):`<br/> Subclasses can be used in place of base classes (e.g., any `BaseLogin` subclass can be used where a login is needed).
* `Interface Segregation Principle (ISP) (partially):`<br/> While JS doesn’t have interfaces, the code structure keeps classes focused and avoids forcing them to implement unused methods; there is no strict enforcement - this is by design and convention.
* `Dependency Inversion Principle (DIP):`<br/> Test data and configuration are injected into classes (e.g., via constructor parameters), rather than hardcoded.

```
DESIGN PATTERNS:
```
* `Page Object Model (POM):`<br/> The codebase uses a hybrid POM approach, where reusable classes represent flows or features (not just pages). This is evident in the `test-classes` folder structure and the way classes encapsulate UI interactions.
* `Template Method Pattern:`<br/> Base classes (`BaseLogin`, `BaseRegistration`, etc) define the skeleton of operations (`enterEmail`, `enterPassword`, etc) and allow subclasses to override specific steps. For example, `BaseLogin.verifyLogin` is overridden per product to assert a product-specific success element.
* `Strategy/Configuration-Driven Pattern:`<br/> Some flows (`registration`, etc) use configuration objects to determine the sequence of steps based on geolocation and the dynamic execution of steps in the `submitPersonalDetails` method.
* `Fixture Pattern`<br/> Test setup and teardown logic is handled via fixtures, as seen in the `test-utils/fixtures/` directory and the use of Playwright’s fixture system in test files.
* `Factory Pattern (Implicit):`<br/> While not explicitly named, the way test classes are instantiated based on product/platform/geo in test files is similar to a factory pattern, allowing flexible creation of the right class for the context.

</details>

---

<details>
  <summary>Test runs</summary><br/>

```
TEST RUN COMMANDS AND OPTIONS:
```
`npm test` - based on the predefined command in `package.json`.<br/>
`npx playwright test --ui` - opens the Playwright Test UI for interactive test selection and debugging.<br/>
`npx playwright test` - runs ALL possible tests in headless mode.<br/>
`npx playwright test --headed` - runs tests with the browser UI visible (not headless).<br/>
`npx playwright test --headless` - runs tests in headless mode (default).<br/>
`npx playwright test path/to/file.spec.js` - runs only the specified test file.<br/>
`npx playwright test -g 'login'` - runs only tests with "Login" in their title (short command).<br/>
`npx playwright test --grep 'login'` - runs only tests with "Login" in their title (long command).<br/>
`npx playwright test --grep-invert 'login'` - runs tests without "Login" in their title.<br/>
`npx playwright test --workers=2` - sets the number of parallel workers (default: number of CPU cores).<br/>
`npx playwright test --help` - shows all available options.<br/>

```
MOST USED EXAMPLES:
```
If you need to run tests in UI mode or debug them:<br/>
`npm test` or `npx playwright test --ui`<br/><br/>
If you need to run a specific spec file with pattern `<project><platform><testcase>` (case insensitive):<br/>
`npx playwright test ProductWebLogin`<br/>
`npx playwright test productweblogin`<br/>
`npx playwright test PRODUCTWEBLOGIN`<br/><br/>
In general, grepping is one of the most powerful options for running specific tests (case-insensitive):<br/>
`npx playwright test product -g 'login'`<br/>
`npx playwright test product --grep 'login'`<br/>
`npx playwright test --grep 'registration'`<br/>
`npx playwright test --grep-invert 'registration'`<br/>

</details>

---

<details>
  <summary>Reports</summary><br/>

```
USED REPORTERS:
```
There are several main reporters used in the framework:<br/>
`list` - console reporter shows test results in the console (directly in the terminal)<br/>
`html` - HTML reporter generates a report in the `playwright-report` folder and can be opened in the browser<br/>
`allure-reporter` - Allure Reporter includes several relevant npm packages for generating reports in the Allure format.<br/>

```
ALLURE REPORTER USAGE DETAILS:
```
* For Allure Reporter to work properly, you need to install Java - [download][6]
* After installing Java, you need to set the `JAVA_HOME` environment variable.
* The way to set the `JAVA_HOME` environment variable differs based on the operating system (please refer to online guides for your OS).
* In order to verify Java installation, you can run `java -version` in the terminal.

</details>

---

<details>
  <summary>Docker</summary><br/>

```
DOCKER DESKTOP COMMANDS:
```
`docker desktop start` - starts Docker Desktop.<br/>
`docker desktop stop` - stops Docker Desktop and all running containers.<br/>
`docker desktop status` - checks Docker Desktop status.<br/>
`docker desktop restart` - restarts Docker Desktop.<br/>

```
IMAGE COMMANDS:
```
`docker images` - list all images.<br/>
`docker build -t <image_name>:<tag> .` - build an image.<br/>
`docker build --no-cache -t <image_name>:<tag> .` - build an image without cache.<br/>
`docker rmi <image_name_or_id>` - remove an image.<br/>
`docker pull <image_name>:<tag>` - pull an image from Docker Hub.<br/>
```
CONTAINER COMMANDS:
```
`docker ps` - list running containers.<br/>
`docker ps -a` - list all containers (including stopped).<br/>
`docker run <options> <image_name>` - run a container (general pattern).<br/>
`docker run --rm <image_name>` - run a container and remove it after execution.<br/>
`docker run --rm <image_name> /bin/bash` - run a container with CLI and remove it after execution.<br/>
`docker stop <container_id_or_name>` - stop a running container.<br/>
`docker start <container_id_or_name>` - start a stopped container.<br/>
`docker rm <container_id_or_name>` - remove a container.<br/>
```
CLEANUP COMMANDS:
```
`docker container prune` - remove all stopped containers.<br/>
`docker image prune` - remove all unused images.<br/>
`docker builder prune` - remove build cache data.<br/>
`docker system prune` - remove everything unused.<br/>

</details>

[0]: https://code.visualstudio.com/download
[1]: https://git-scm.com/downloads
[2]: https://nodejs.org/en/
[3]: https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
[4]: https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account
[5]: https://docs.github.com/en/authentication/connecting-to-github-with-ssh/testing-your-ssh-connection
[6]: https://www.oracle.com/java/technologies/downloads/
[7]: https://www.docker.com/products/docker-desktop/