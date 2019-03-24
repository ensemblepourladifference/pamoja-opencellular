FROM debian:stretch AS build
WORKDIR /usr/src/app

COPY 	./fsstretch-archive-keyring.asc /tmp/fsstretch-archive-keyring.asc
RUN	apt-get update && \
	apt-get install -y --no-install-recommends \
		python3-dev \
		devscripts \
		cowbuilder \
		libsmpp34-dev \
		gnupg && \
	apt-key add /tmp/fsstretch-archive-keyring.asc && \
	echo "deb http://files.freeswitch.org/repo/deb/freeswitch-1.8/ stretch main" > /etc/apt/sources.list.d/freeswitch.list && \
	echo "deb-src http://files.freeswitch.org/repo/deb/freeswitch-1.8/ stretch main" >> /etc/apt/sources.list.d/freeswitch.list && \
	apt-get update && \
	apt-get build-dep -y --no-install-recommends freeswitch && \
	apt-get clean

COPY	./python3.patch /tmp
COPY	./smpp.patch /tmp
RUN	mkdir -p /usr/src/ && \
	cd /usr/src && \
	git clone https://freeswitch.org/stash/scm/fs/freeswitch.git -bv1.8 freeswitch && \
	cd freeswitch && \
	git config --global user.email "you@example.com" && \
	git config --global user.name "Your Name" && \
	git am /tmp/python3.patch && \
	git am /tmp/smpp.patch

COPY    ./modules.conf /tmp/modules.conf
RUN	cd /usr/src/freeswitch && \
	./bootstrap.sh -j && \
	cp /tmp/modules.conf . && \
	./configure \
		--with-python=`which python3` \
		--with-prefix=/usr/local/freeswitch \
		--enable-optimization && \
	make -j`nproc` && \
	make install hd-sounds-fr-install && \
	cd libs/esl && \
	make pymod && \
	make pymod-install

FROM debian:stretch-slim
COPY --from=build /usr/local/freeswitch /usr/local/freeswitch
COPY --from=build /usr/lib/python3/dist-packages /usr/lib/python3/dist-packages

# make the "en_US.UTF-8" locale so freeswitch will be utf-8 enabled by default
ENV	LANG en_US.utf8

COPY 	./fsstretch-archive-keyring.asc /tmp/fsstretch-archive-keyring.asc
RUN	apt-get update && \
	apt-get install -y --no-install-recommends \
		gosu \
		gnupg \
		libsmpp34-0 \
		libpython3.5 \
		libsqlite3-0 \
		libpng16-16 \
		libspeexdsp1 \
		libspeex1 \
		libfreetype6 \
		libncurses5 \
		libssl1.0.2 \
		libodbc1 \
		libbsd0 \
		libc6 \
		libedit2 \
		libpq5 \
		libtinfo5 \
		libswscale4 \
		libuuid1\
		libsndfile1 \
		libcurl3 \
		locales \
		libopencore-amrnb0 && \
	localedef -i en_US -c -f UTF-8 -A /usr/share/locale/locale.alias en_US.UTF-8 && \
	apt-key add /tmp/fsstretch-archive-keyring.asc && \
	echo "deb http://files.freeswitch.org/repo/deb/freeswitch-1.8/ stretch main" > /etc/apt/sources.list.d/freeswitch.list && \
	echo "deb-src http://files.freeswitch.org/repo/deb/freeswitch-1.8/ stretch main" >> /etc/apt/sources.list.d/freeswitch.list && \
	apt-get update && \
	apt-get install -y --no-install-recommends \
		libg72211 && \
	rm -rf /var/lib/apt/lists/* && \
	apt-get remove -y gnupg && \
	apt-get autoremove -y && \
	apt-get clean && \
	groupadd -r freeswitch --gid=999 && useradd -r -g freeswitch --uid=999 freeswitch

# Add service entrypoint
COPY	./docker-entrypoint.sh /
# Limits Configuration
COPY    ./build/freeswitch.limits.conf /etc/security/limits.d/
# Copy custom configurations
COPY 	./build/conf/modules.conf.xml /usr/local/freeswitch/conf/autoload_configs/
COPY 	./build/conf/event_socket.conf.xml /usr/local/freeswitch/conf/autoload_configs/

## Ports
# Open the container up to the world.
### 8021 fs_cli, 5060 5061 5080 5081 sip and sips, 64535-65535 rtp
EXPOSE 8021/tcp
EXPOSE 5060/tcp 5060/udp 5080/tcp 5080/udp
EXPOSE 5061/tcp 5061/udp 5081/tcp 5081/udp
EXPOSE 7443/tcp
EXPOSE 5070/udp 5070/tcp
EXPOSE 64535-65535/udp
EXPOSE 16384-32768/udp

# Volumes
## Freeswitch Configuration
VOLUME ["/usr/local/freeswitch/conf"]
## Tmp so we can get core dumps out
VOLUME ["/tmp"]

# Environment
ENV	PATH "$PATH:/usr/local/freeswitch/bin/"


# Healthcheck to make sure the service is running
SHELL       ["/bin/bash"]
HEALTHCHECK --interval=15s --timeout=5s \
    CMD  /usr/local/freeswitch/bin/fs_cli -x status | grep -q ^UP || exit 1

ENTRYPOINT ["/docker-entrypoint.sh"]
CMD ["freeswitch"]
