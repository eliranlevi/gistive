import { connect } from "react-redux";
import { setToken, setUsername } from "../actions/settings";
import Settings from "../components/Settings";
import { getToken, getUsername } from "../selectors/common";
import { RootState } from "../store";

interface DispatchProps {
  setToken: (token: string) => void;
  setUsername: (username: string) => void;
}

interface StateProps {
  token: string;
  username: string;
}

const mapStateToProps = (state: RootState): StateProps => ({
  token: getToken(state),
  username: getUsername(state),
});

const mapDispatchToProps: DispatchProps = {
  setToken,
  setUsername,
};

export type SettingsProps = StateProps & DispatchProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Settings);
