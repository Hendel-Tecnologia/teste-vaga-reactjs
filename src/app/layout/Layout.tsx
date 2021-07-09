import Sidebar from './Sidebar'

type Props = {
  children?: React.ReactNode
}

const Layout = (props: Props) => (
  <div id="wrapper">
    <Sidebar />

    <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
        </nav>

        <div className="container-fluid">
          {props.children}
        </div>
      </div>

      <footer className="sticky-footer bg-white">
        <div className="container my-auto">
          <div className="copyright text-center my-auto">
            <span>Copyright &copy; Hendel Admin 2021</span>
          </div>
        </div>
      </footer>
    </div>
  </div>
)

export default Layout