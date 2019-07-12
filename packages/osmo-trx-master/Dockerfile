FROM debian:stretch AS build
MAINTAINER Omar Ramadan <omar.ramadan93@gmail.com>

WORKDIR	/tmp
RUN	apt-get update && \
	apt-get upgrade -y && \
	apt-get install -y --no-install-recommends \
		autoconf \
		autoconf-archive \
		autogen \
		automake \
		bison \
		build-essential \
		cppcheck \
		debhelper \
		devscripts \
		dh-autoreconf \
		dh-systemd \
		doxygen \
		flex \
		g++ \
		gawk \
		gcc \
		git \
		git-buildpackage \
                gnupg \
		libc-ares-dev \
		libdbd-sqlite3 \
		libdbi-dev \
		libfftw3-dev \
		libgnutls28-dev \
		libgps-dev \
		libgsm1-dev \
		libncurses5-dev \
		libortp-dev \
		libpcap-dev \
		libpcsclite-dev \
		libtalloc-dev \
		libtool \
		libreadline-dev \
		libsctp-dev \
		libsofia-sip-ua-glib-dev \
		libsqlite3-dev \
		libssl-dev \
		libusb-dev \
		libusb-1.0-0-dev \
		make \
		pkg-config \
		sqlite3 \
		telnet \
		wget \
                python-mako \
                python-docutils \
                python-numpy \
                python-requests \
                python-setuptools \
                python-dev \
                libboost-all-dev \
                cmake \
		libboost-dev \
		libudev-dev && \
	apt-get clean

ARG     OSMOCOM_REPO="http://download.opensuse.org/repositories/network:/osmocom:/nightly/Debian_9.0/"
COPY    Release.key /tmp/Release.key
RUN     apt-key add /tmp/Release.key && \
        rm /tmp/Release.key && \
        echo "deb " $OSMOCOM_REPO " ./" > /etc/apt/sources.list.d/osmocom-nightly.list
ADD     $OSMOCOM_REPO/Release /tmp/Release

RUN	apt-get update && \
        apt-get -y install --no-install-recommends \
		libosmocore-dev && \
	apt-get clean


ARG     UHD_BRANCH="UHD-3.9.LTS"
RUN     git clone git://github.com/EttusResearch/uhd.git
COPY    uhd_ocr01.patch /tmp/uhd_ocr01.patch

RUN     cd uhd/host && \
#	git fetch && git checkout -f -B $UHD_BRANCH origin/$UHD_BRANCH && \
#       need to upstream oc-sdr patch!
	git checkout d3b7e90aef5c5079b8275b4bf6385f3cb4094908 && \
        git apply /tmp/uhd_ocr01.patch && \
        mkdir build && \
        cd build && \
        cmake -DUHD_LOG_CONSOLE_LEVEL=trace -DUHD_LOG_MIN_LEVEL=trace -DCMAKE_INSTALL_PREFIX=/opt/uhd ../ && \
        make -j`nproc` install

ARG	OSMO_TRX_BRANCH="master"
ARG     UHD_INSTALL_PATH=/opt/uhd
ARG     OSMO_INSTALL_PATH=/opt/osmo

RUN	git clone git://git.osmocom.org/osmo-trx.git
ADD	http://git.osmocom.org/osmo-trx/patch?h=$OSMO_TRX_BRANCH /tmp/commit-osmo-trx
COPY    osmotrx_ocr01.patch /tmp/osmotrx_ocr01.patch

RUN	cd osmo-trx && \
	#git fetch && git checkout -f -B $OSMO_TRX_BRANCH origin/$OSMO_TRX_BRANCH && \
#       need to upstream oc-sdr patch!
        git checkout 1c4bbadda63e91fec4ae0a4134a22b299025a769 && \
        git apply /tmp/osmotrx_ocr01.patch && \
	autoreconf -fi && \
	./configure --prefix=$OSMO_INSTALL_PATH PKG_CONFIG_PATH=$UHD_INSTALL_PATH/lib/pkgconfig  && \
	make -j8 install

FROM debian:stretch-slim
ENTRYPOINT []
CMD []
VOLUME /data
WORKDIR /data

RUN     apt-get update && \
        apt-get install -y --no-install-recommends \
                gnupg \
                libboost-program-options1.62.0 \
                libboost-filesystem1.62.0 \
                libboost-date-time1.62.0 \
                libboost-system1.62.0 \
                libboost-regex1.62.0 \
                libboost-test1.62.0 \
                libboost-thread1.62.0 \
                libboost-chrono1.62.0 \
                libboost-atomic1.62.0 \
                libboost-serialization1.62.0 \
		libusb-1.0 \
                libfftw3-single3 \
                libsqlite3-0 \
                python \
		usbutils \
		udev \
                python-requests && \
	apt-get clean

ARG     OSMOCOM_REPO="http://download.opensuse.org/repositories/network:/osmocom:/nightly/Debian_9.0/"
COPY    Release.key /tmp/Release.key
RUN     apt-key add /tmp/Release.key && \
        rm /tmp/Release.key && \
        echo "deb " $OSMOCOM_REPO " ./" > /etc/apt/sources.list.d/osmocom-nightly.list
ADD     $OSMOCOM_REPO/Release /tmp/Release
RUN     apt-get update && \
        apt-get install -y --no-install-recommends \
                libosmocore && \
	apt-get clean

COPY --from=build /opt/osmo/ /usr/local/
COPY --from=build /opt/uhd/ /usr/local/
RUN     ldconfig
#RUN     uhd_images_downloader
COPY    usrp_*    /opt/uhd/share/uhd/images/
COPY    uhd-usrp.rules  /etc/udev/rules.d

CMD	["osmo-trx-uhd", "-C", "/etc/osmocom/osmo-trx.cfg"]
#CMD ["ls", "/bin"]
