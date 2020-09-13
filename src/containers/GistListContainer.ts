import { connect } from "react-redux";
import { getGists, setSelectedGist } from "../actions/gists";
import GistList from "../components/GistList";
import { Gist } from "../interfaces/common";
import { getGists as getGistsSelector, getUsernameForGistList } from "../selectors/common";
import { RootState } from "../store/interfaces";
import { getSettingsFromStorage } from "../actions/settings";
import { StackNavigationProp } from "@react-navigation/stack";

interface DispatchProps {
  getGists: () => void;
  getSettingsFromStorage: () => void;
  setSelectedGist: (gist: Gist) => void;
}

interface StateProps {
  username: string;
  gists: Gist[];
}

interface Props {
  navigation: StackNavigationProp<{GistScreen: undefined}, "GistScreen">;
}

const mapStateToProps = (state: RootState): StateProps => ({
  username: getUsernameForGistList(state),
  gists: getGistsSelector(state),
});

const mapDispatchToProps: DispatchProps = {
  getGists,
  getSettingsFromStorage,
  setSelectedGist,
};

export type GistListProps = StateProps & DispatchProps & Props;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GistList);
