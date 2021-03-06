import { connect } from "react-redux";
import { getGists } from "../actions/gists";
import GistList from "../components/GistList";
import { Gist } from "../interfaces/common";
import { getGists as getGistsSelector, getUsernameForGistList } from "../selectors/common";
import { RootState } from "../store/interfaces";
import { getSettingsFromStorage } from "../actions/settings";

interface DispatchProps {
  getGists: () => void;
  getSettingsFromStorage: () => void;
}

interface StateProps {
  username: string;
  gists: Gist[];
}

const mapStateToProps = (state: RootState): StateProps => ({
  username: getUsernameForGistList(state),
  gists: getGistsSelector(state),
});

const mapDispatchToProps: DispatchProps = {
  getGists,
  getSettingsFromStorage,
};

export type GistListProps = StateProps & DispatchProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GistList);
