<div id="nav-container">
            <nav>
                    <a href="javascript:void(0);" id="menuButton" onClick="openNavMenu();"> <em class="fa fa-bars fa-lg"></em></a>
                    <input type="text" placeholder="Suchen..." id="searchBar">
                    <a href="javascript:void(0);" id="searchButton" onClick="searchFunc();">
                        <i class="fa fa-search fa-lg"></i>
                    </a>
                    <a href="javascript:void(0);" id="messageButton" onClick="window.location.href='messages.php'">
                        <i class="fas fa-envelope"></i>
                    </a>
                    <div id="dropdown">
			<a href="index.php">Fächer</a>
                        <a href="ranking.php">Top 10</a>
                        <a href="about.php">Über</a>
                        <a href="createAccount.php" class="modOnly">Account erstellen</a>
                        <a href="overview-unreviewed.php" class="modOnly">Nicht reviewte Posts</a>
			<a onClick="logout();" id="logout">Logout</a>
                    </div>
            </nav>
</div>
