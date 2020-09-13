import { connect } from "react-redux";
import GistScreen from "../components/GistScreen";
import { Gist } from "../interfaces/common";
import { getSelectedGist } from "../selectors/common";
import { RootState } from "../store/interfaces";

interface GistScreenStateProps {
  gist: Gist;
}

const mapStateToProps = (state: RootState): GistScreenStateProps => ({
  gist: getSelectedGist(state),
});

const mapDispatchToProps = {};

export type GistScreenProps = GistScreenStateProps;

export default connect(mapStateToProps, mapDispatchToProps)(GistScreen);
