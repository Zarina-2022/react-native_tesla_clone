# Tesla Clone

The "tesla_clone" project is a React Native application designed to mimic the interface and functionality of the Tesla website. Here's a summary of its key components and features:

1. **Dependencies and Scripts:**
   - It uses React Native version 0.73.6 and React version 18.2.0.
   - Scripts are set up for running on Android, iOS, starting the application.

2. **Theme Colors:**
   - Defines a set of colors in a constant named COLORS.

3. **App Component:**
   - Contains the root component of the application.
   - Renders the HomeScreen component within a View container.

4. **HomeScreen Component:**
   - Displays the main screen of the application.
   - Includes a Header component and a CarsList component.

5. **StyledButton Component:**
   - Presents a styled button with customizable color and content.
   - Utilizes React Native's Pressable component for button functionality.

6. **Header Component:**
   - Displays the header with a logo and menu icon.
   - Uses React Native's Image component to render images.

7. **CarsList Component:**
   - Displays a list of car items using a FlatList component.
   - Each item is a CarItem component.
   - Implements smooth scrolling and snap-to-effect functionalities.

8. **CarItem Component:**
   - Represents an individual car item within the CarsList.
   - Displays car name, tagline, and taglineCTA along with buttons for custom ordering and viewing existing inventory.
   - Utilizes React Native's ImageBackground for displaying car images.

9. **Static Data:**
   - Contains static data for different Tesla models including name, tagline, taglineCTA, and image.

Overall, the project provides a basic structure and components for creating a Tesla-like app interface in React Native.

Screen View:

![](tesla-screen.gif)