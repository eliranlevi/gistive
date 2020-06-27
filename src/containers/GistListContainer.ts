import { connect } from "react-redux";
import { Gist } from "../interfaces/common";
import GistList from "../components/GistList";
import { getGists } from "../actions/gists";
import { RootState } from "../store";
import { getUsername, getGists as getGistsSelector } from "../selectors/common";

interface DispatchProps {
  getGists: () => void;
}

interface StateProps {
  username: string;
  gists: Gist[];
}

const mapStateToProps = (state: RootState): StateProps => ({
  username: getUsername(state),
  gists: getGistsSelector(state),
});

const mapDispatchToProps: DispatchProps = {
  getGists,
};

export type GistListProps = StateProps & DispatchProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GistList);
