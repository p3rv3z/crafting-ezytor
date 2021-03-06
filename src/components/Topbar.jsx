import React from "react";
import {
  Box,
  FormControlLabel,
  Switch,
  Grid,
  Button as MaterialButton,
} from "@material-ui/core";
import { useEditor } from "../../packages/core/src";

export const Topbar = () => {
  const { actions, query, enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  return (
    <Box
      sx={{
        px: 1,
        py: 1,
        mt: 3,
        mb: 1,
        backgroundColor: "#cbe8e7",
        height: 100,
      }}
    >
      <Grid container alignItems="center">
        <Grid item xs>
          <FormControlLabel
            control={
              <Switch
                checked={enabled}
                onChange={(_, value) =>
                  actions.setOptions((options) => (options.enabled = value))
                }
              />
            }
            label="Enable"
          />
        </Grid>
        <Grid item>
          <MaterialButton
            size="small"
            variant="outlined"
            color="secondary"
            onClick={() => {
              console.log(query.getSerializedNodes());
            }}
          >
            Serialize JSON to console
          </MaterialButton>
        </Grid>
      </Grid>
    </Box>
  );
};
