import { connect } from "react-redux";
import { setSettings } from "../actions/settings";
import Settings from "../components/Settings";
import { SettingsState } from "../reducers/settingsReducer";
import { getToken, getUsername } from "../selectors/common";
import { RootState } from "../store/interfaces";

interface ComponentProps {
  onSubmit: () => void;
}

interface DispatchProps {
  setSettings: (settings: SettingsState) => void;
}

interface StateProps {
  defaultToken: string;
  defaultUsername: string;
}

const mapStateToProps = (state: RootState): StateProps => ({
  defaultToken: getToken(state),
  defaultUsername: getUsername(state),
});

const mapDispatchToProps: DispatchProps = {
  setSettings,
};

export type SettingsProps = ComponentProps & StateProps & DispatchProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Settings);
