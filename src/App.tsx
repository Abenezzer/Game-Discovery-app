import { Grid, GridItem, Box, Show } from "@chakra-ui/react";
const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <Box bg="blue">Navbar</Box>
      </GridItem>
      
      <GridItem area="aside" display={{base: "none", lg:"block"}}>
        <Box bg="teal">Aside</Box>
      </GridItem>
      <GridItem area="main">
        <Box bg="red">main</Box>
      </GridItem>
    </Grid>
  );
};
export default App;
