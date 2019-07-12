var page_devices =
[
    [ "General Application Notes", "page_general.html", [
      [ "Tuning Notes", "page_general.html#general_tuning", [
        [ "Two-stage tuning process", "page_general.html#general_tuning_process", [
          [ "Tuning the receive chain:", "page_general.html#general_tuning_rxchain", null ]
        ] ],
        [ "RF front-end settling time", "page_general.html#general_tuning_rfsettling", [
          [ "Pseudo-code for dealing with settling time after tuning on receive:", "page_general.html#general_tuning_waitcode", null ]
        ] ]
      ] ],
      [ "Sample rate notes", "page_general.html#general_sampleratenotes", [
        [ "Automatic master-clock selection", "page_general.html#general_sampleratenotes_automatic", null ],
        [ "Master clock rate and Nyquist", "page_general.html#general_sampleratenotes_nyquist", null ]
      ] ],
      [ "Overflow/Underflow Notes", "page_general.html#general_ounotes", [
        [ "Overflow notes", "page_general.html#general_ounotes_overflow", null ],
        [ "Underrun notes", "page_general.html#general_ounotes_underrun", null ]
      ] ],
      [ "Threading Notes", "page_general.html#general_threading", [
        [ "Thread safety notes", "page_general.html#general_threading_safety", null ],
        [ "Thread priority scheduling", "page_general.html#general_threading_prio", null ]
      ] ],
      [ "Miscellaneous Notes", "page_general.html#general_misc", [
        [ "Support for dynamically loadable modules", "page_general.html#general_misc_dynamic", null ],
        [ "Disabling or redirecting prints to stdout", "page_general.html#general_misc_prints", null ]
      ] ]
    ] ],
    [ "Device Identification", "page_identification.html", [
      [ "Identifying USRP Devices", "page_identification.html#id_identifying", [
        [ "Common device identifiers", "page_identification.html#id_identifying_common", null ],
        [ "Device discovery via command line", "page_identification.html#id_identifying_cmdline", null ],
        [ "Device discovery through the API", "page_identification.html#id_identifying_api", null ],
        [ "Device properties", "page_identification.html#id_identifying_props", null ]
      ] ],
      [ "Naming a USRP Device", "page_identification.html#id_naming", [
        [ "Set a custom name", "page_identification.html#id_naming_set", null ],
        [ "Discovery via name", "page_identification.html#id_naming_discovery", null ]
      ] ]
    ] ],
    [ "Configuring Devices and Streamers", "page_configuration.html", [
      [ "Device Configuration through address string", "page_configuration.html#config_devaddr", null ],
      [ "Specifying the Subdevice", "page_configuration.html#config_subdev", [
        [ "USRP Family Motherboard Slot Names", "page_configuration.html#config_subdev_slotnames", null ],
        [ "USRP Family Motherboard Slot Names", "page_configuration.html#config_subdev_default", null ],
        [ "Daughterboard Frontend Names", "page_configuration.html#config_subdev_dbnames", null ]
      ] ],
      [ "Streaming Arguments (Stream Args)", "page_configuration.html#config_stream_args", null ]
    ] ],
    [ "Multiple USRP configurations", "page_multiple.html", [
      [ "Introduction", "page_multiple.html#multiple_intro", null ],
      [ "Setting up devices", "page_multiple.html#multiple_setup", null ],
      [ "Channel and Device Numbering", "page_multiple.html#multiple_channumbers", null ],
      [ "MIMO Operation", "page_multiple.html#multiple_mimo", null ]
    ] ],
    [ "Firmware and FPGA Images", "page_images.html", [
      [ "Images Overview", "page_images.html#images_overview", null ],
      [ "Pre-built Images", "page_images.html#images_prebuild", [
        [ "UHD Images Downloader", "page_images.html#images_prebuilt_downloader", null ],
        [ "Platform installers", "page_images.html#images_prebuilt_installers", null ],
        [ "Archive install", "page_images.html#images_prebuilt_archive", null ]
      ] ],
      [ "Building Images", "page_images.html#images_building", [
        [ "Xilinx FPGA builds", "page_images.html#images_building_xilinx", null ],
        [ "ZPU firmware builds", "page_images.html#images_building_zpu", null ],
        [ "Altera FPGA builds", "page_images.html#images_building_altera", null ],
        [ "FX2 firmware builds", "page_images.html#images_building_fx2", null ]
      ] ]
    ] ],
    [ "Transport Notes", "page_transport.html", [
      [ "Introduction", "page_transport.html#transport_intro", null ],
      [ "UDP Transport (Sockets)", "page_transport.html#transport_udp", [
        [ "Transport parameters", "page_transport.html#transport_udp_params", null ],
        [ "Flow control parameters", "page_transport.html#transport_udp_flow", null ],
        [ "Resize socket buffers", "page_transport.html#transport_udp_sockbufs", null ],
        [ "Latency Optimization", "page_transport.html#transport_udp_latency", null ],
        [ "Linux specific notes", "page_transport.html#transport_udp_linux", null ],
        [ "Windows specific notes", "page_transport.html#transport_udp_windows", null ]
      ] ],
      [ "USB Transport (LibUSB)", "page_transport.html#transport_usb", [
        [ "Transport parameters", "page_transport.html#transport_usb_params", null ],
        [ "Setup Udev for USB (Linux)", "page_transport.html#transport_usb_udev", null ],
        [ "Install USB driver (Windows)", "page_transport.html#transport_usb_installwin", null ]
      ] ]
    ] ],
    [ "Device Synchronization", "page_sync.html", [
      [ "Common Reference Signals", "page_sync.html#sync_commonref", [
        [ "PPS and 10 MHz reference signals", "page_sync.html#sync_commonref_pps", null ],
        [ "MIMO cable reference signals", "page_sync.html#sync_commonref_mimo", null ]
      ] ],
      [ "Synchronizing the Device Time", "page_sync.html#sync_time", [
        [ "Method 1 - poll the USRP time registers", "page_sync.html#sync_time_reg", null ],
        [ "Method 2 - query the GPSDO for seconds", "page_sync.html#sync_time_gpsdo", null ],
        [ "Method 3 - MIMO cable", "page_sync.html#sync_time_mimocable", null ]
      ] ],
      [ "Synchronizing Channel Phase", "page_sync.html#sync_phase", [
        [ "Align CORDICs in the DSP", "page_sync.html#sync_phase_cordics", null ],
        [ "Align LOs in the front-end (SBX, UBX)", "page_sync.html#sync_phase_lo", null ],
        [ "Align LOs in the front-end (others)", "page_sync.html#sync_phase_lootherfe", null ]
      ] ]
    ] ],
    [ "Device Calibration", "page_calibration.html", [
      [ "Self-Calibration", "page_calibration.html#calibration_self", [
        [ "Calibration Utilities", "page_calibration.html#calibration_self_utils", null ],
        [ "Calibration Data", "page_calibration.html#calibration_data", null ],
        [ "Ignoring Calibration Files", "page_calibration.html#ignore_cal_file", null ]
      ] ]
    ] ],
    [ "USRP2 and N2x0 Series", "page_usrp2.html", "page_usrp2" ],
    [ "USRP B100 Series", "page_usrp_b100.html", [
      [ "Comparative features list", "page_usrp_b100.html#b100_features", null ],
      [ "Specify a Non-standard Image", "page_usrp_b100.html#b100_imgs", null ],
      [ "Changing the Master Clock Rate", "page_usrp_b100.html#b100_mcr", [
        [ "Set 61.44 MHz - uses external VCXO", "page_usrp_b100.html#b100_mcr_vcxo", null ],
        [ "Set other rates - uses internal VCO", "page_usrp_b100.html#b100_mcr_vco", null ]
      ] ],
      [ "Hardware setup notes", "page_usrp_b100.html#b100_hw", [
        [ "Front panel LEDs", "page_usrp_b100.html#b100_hw_leds", null ]
      ] ],
      [ "Miscellaneous", "page_usrp_b100.html#b100_misc", [
        [ "Available Sensors", "page_usrp_b100.html#b100_misc_sensors", null ]
      ] ]
    ] ],
    [ "USRP B2x0 Series", "page_usrp_b200.html", "page_usrp_b200" ],
    [ "USRP1", "page_usrp1.html", [
      [ "Comparative features list", "page_usrp1.html#usrp1_features", null ],
      [ "Specify a Non-standard Image", "page_usrp1.html#usrp1_imgs", null ],
      [ "Missing and Emulated Features", "page_usrp1.html#usrp1_emul", [
        [ "List of emulated features", "page_usrp1.html#usrp1_emul_list", null ],
        [ "List of missing features", "page_usrp1.html#usrp1_emul_listmissing", null ]
      ] ],
      [ "Hardware Setup Notes", "page_usrp1.html#usrp1_hw", [
        [ "External clock modification", "page_usrp1.html#usrp1_hw_extclk", null ]
      ] ]
    ] ],
    [ "USRP-E1x0 Series", "page_usrp_e1x0.html", "page_usrp_e1x0" ],
    [ "USRP-E3xx Series", "page_usrp_e3x0.html", [
      [ "Comparative features list - E310", "page_usrp_e3x0.html#e3x0_feature_list", null ],
      [ "Getting started", "page_usrp_e3x0.html#e3x0_getting_started", [
        [ "First boot", "page_usrp_e3x0.html#e3x0_first_boot", [
          [ "Serial connection", "page_usrp_e3x0.html#e3x0_first_boot_serial", null ],
          [ "SSH connection", "page_usrp_e3x0.html#e3x0_first_boot_ssh", null ]
        ] ]
      ] ],
      [ "Using the SDK", "page_usrp_e3x0.html#e3x0_sdk", [
        [ "Installation", "page_usrp_e3x0.html#e3x0_sdk_installation", [
          [ "Obtaining the correct SDK", "page_usrp_e3x0.html#e3x0_sdk_installation_download", null ],
          [ "Obtaining the right toolchain", "page_usrp_e3x0.html#e3x0_sdk_installation_install", null ]
        ] ],
        [ "Usage", "page_usrp_e3x0.html#e3x0_sdk_usage", [
          [ "Building UHD", "page_usrp_e3x0.html#e3x0_sdk_usage_uhd", null ],
          [ "Building GNU Radio", "page_usrp_e3x0.html#e3x0_sdk_usage_gnuradio", null ]
        ] ]
      ] ],
      [ "Rebuilding the file system", "page_usrp_e3x0.html#e3x0_image_building", null ],
      [ "Upgrading / Writing image to sd card", "page_usrp_e3x0.html#e3x0_upgrade_sd_card", null ],
      [ "Specifying a Non-standard FPGA Image", "page_usrp_e3x0.html#e3x0_load_fpga_imgs", [
        [ "Using UHD to load FPGA images", "page_usrp_e3x0.html#e3x0_load_fpga_imgs_uhd", null ],
        [ "Using JTAG to load FPGA images", "page_usrp_e3x0.html#e3x0_load_fpga_imgs_jtag", null ],
        [ "Change the USRP's IP address", "page_usrp_e3x0.html#e3x0_setup_change_ip", null ]
      ] ],
      [ "Hardware Notes", "page_usrp_e3x0.html#e3x0_hw", [
        [ "Front Panel", "page_usrp_e3x0.html#e3x0_hw_fpanel", null ],
        [ "Rear Panel", "page_usrp_e3x0.html#e3x0_hw_rear_panel", null ],
        [ "Clock and Time Synchronization", "page_usrp_e3x0.html#e3x0_hw_sync", null ],
        [ "PPS - Pulse Per Second", "page_usrp_e3x0.html#e3x0_hw_pps", null ],
        [ "Internal GPS", "page_usrp_e3x0.html#e3x0_hw_gps", null ],
        [ "Inertial Measurement Unit (IMU)", "page_usrp_e3x0.html#e3x0_hw_imu", null ],
        [ "Internal GPIO", "page_usrp_e3x0.html#e3x0_hw_gpio", null ],
        [ "Audio connectors", "page_usrp_e3x0.html#e3x0_hw_audio", null ],
        [ "Debugging custom FPGA designs with Xilinx Chipscope", "page_usrp_e3x0.html#e3x0_hw_chipscope", null ]
      ] ],
      [ "Battery notes", "page_usrp_e3x0.html#e3xx_battery", [
        [ "Connector", "page_usrp_e3x0.html#e3xx_battery_connector", null ],
        [ "Driver", "page_usrp_e3x0.html#e3xx_battery_information", null ],
        [ "Calibration Procedure", "page_usrp_e3x0.html#e3xx_battery_calibration", null ]
      ] ],
      [ "Daughterboard notes", "page_usrp_e3x0.html#e3x0_dboards", [
        [ "E310 MIMO XCVR board", "page_usrp_e3x0.html#e3x0_dboard_e310", [
          [ "Frontend tuning", "page_usrp_e3x0.html#e3x0_dboard_e310_tuning", null ],
          [ "Frontend gain", "page_usrp_e3x0.html#e3x0_dboard_e310_gain", null ],
          [ "Frontend LO lock status", "page_usrp_e3x0.html#e3x0_dboard_e310_pll", null ],
          [ "Frontend Filter and Antenna Switches", "page_usrp_e3x0.html#e3x0_dboard_e310_band_select", null ],
          [ "Frontend Side A Filter and Antenna Switches", "page_usrp_e3x0.html#e3x0_dboard_e310_frontend_a_switches", null ],
          [ "Frontend Side B Filter and Antenna Switches", "page_usrp_e3x0.html#e3x0_dboard_e310_frontend_b_switches", null ]
        ] ]
      ] ],
      [ "Network configuration", "page_usrp_e3x0.html#e3xx_network_configuration", [
        [ "DHCP", "page_usrp_e3x0.html#e3xx_network_dhcp", null ],
        [ "Static IP", "page_usrp_e3x0.html#e3xx_network_static", null ]
      ] ],
      [ "Miscellaneous", "page_usrp_e3x0.html#e3x0_misc", [
        [ "Multiple RX channels", "page_usrp_e3x0.html#e3x0_misc_multirx", null ],
        [ "Available Sensors", "page_usrp_e3x0.html#e3x0_misc_sensors", null ],
        [ "Network Mode", "page_usrp_e3x0.html#e3x0_network_mode", [
          [ "Building UHD", "page_usrp_e3x0.html#e3x0_uhd_build", null ],
          [ "Activating Network Mode on the Device", "page_usrp_e3x0.html#e3x0_activating_network", null ],
          [ "Addressing the Device", "page_usrp_e3x0.html#e3x0_addressing", null ]
        ] ],
        [ "Booting from a NFS root", "page_usrp_e3x0.html#e3xx_nfs_root", [
          [ "Extracting the filesystems", "page_usrp_e3x0.html#e3xx_nfs_root_extract", null ]
        ] ]
      ] ],
      [ "Communication Problems", "page_usrp_e3x0.html#e3x0_comm_problems", [
        [ "RuntimeError: no control response", "page_usrp_e3x0.html#e3x0_comm_problems_runtimeerr", null ],
        [ "Firewall issues", "page_usrp_e3x0.html#e3x0_comm_problems_firewall", null ],
        [ "Ping the device", "page_usrp_e3x0.html#e3x0_comm_problems_ping", null ],
        [ "Monitor the host network traffic", "page_usrp_e3x0.html#e3x0_comm_problems_monitor", null ],
        [ "Observe Ethernet port LEDs", "page_usrp_e3x0.html#e3x0_comm_problems_leds", null ],
        [ "Frequently Asked Questions", "page_usrp_e3x0.html#e3x0_faq", null ]
      ] ],
      [ "Applications", "page_usrp_e3x0.html#e3x0_apps", [
        [ "GSM Base Station", "page_usrp_e3x0.html#e3x0_apps_gsm", null ]
      ] ]
    ] ],
    [ "USRP X3x0 Series", "page_usrp_x3x0.html", "page_usrp_x3x0" ],
    [ "Daughterboards", "page_dboards.html", [
      [ "Daughterboard Properties", "page_dboards.html#dboards", [
        [ "Basic RX and LFRX", "page_dboards.html#dboards_basicrx", null ],
        [ "Basic TX and LFTX", "page_dboards.html#dboards_basictx", null ],
        [ "DBSRX", "page_dboards.html#dboards_dbsrx", null ],
        [ "DBSRX2", "page_dboards.html#dboards_dbsrx2", null ],
        [ "RFX Series", "page_dboards.html#dboards_rfx", null ],
        [ "XCVR 2450", "page_dboards.html#dboards_xcvr", null ],
        [ "WBX Series", "page_dboards.html#dboards_wbx", null ],
        [ "SBX Series", "page_dboards.html#dboards_sbx", null ],
        [ "CBX Series", "page_dboards.html#dboards_cbx", null ],
        [ "UBX Series", "page_dboards.html#dboards_ubx", null ],
        [ "TVRX", "page_dboards.html#dboards_tvrx", null ],
        [ "TVRX2", "page_dboards.html#dboards_tvrx2", null ],
        [ "E310 MIMO XCVR board", "page_dboards.html#dboards_e300", null ],
        [ "Daughterboard reference clock", "page_dboards.html#dboards_clock_rate", null ],
        [ "DBSRX - Modifying for other boards that USRP1", "page_dboards.html#dboards_dbsrxmod", [
          [ "Step 1: Move the clock configuration resistor", "page_dboards.html#dboards_dbsrxmod_1", null ],
          [ "Step 2: Burn a new daughterboard id into the EEPROM", "page_dboards.html#dboards_dbsrxmod_2", null ]
        ] ],
        [ "RFX - Modify to use motherboard oscillator", "page_dboards.html#dboards_rfxmod", null ]
      ] ]
    ] ],
    [ "OctoClock", "page_octoclock.html", [
      [ "Feature list", "page_octoclock.html#octoclock_features", null ],
      [ "Detecting an Ethernet-compatible device", "page_octoclock.html#detecting_new_unit", null ],
      [ "Upgrading your device", "page_octoclock.html#upgrading_device", [
        [ "Getting the latest firmware images", "page_octoclock.html#getting_latest", null ],
        [ "Burning the bootloader onto the device", "page_octoclock.html#bootloader", null ],
        [ "Uploading the firmware via Ethernet", "page_octoclock.html#firmware", null ],
        [ "Updating the device's EEPROM", "page_octoclock.html#eeprom", null ]
      ] ],
      [ "Using your device", "page_octoclock.html#usage", [
        [ "The boot process", "page_octoclock.html#boot_process", null ],
        [ "Selecting a reference", "page_octoclock.html#selecting", null ],
        [ "Front Panel LEDs", "page_octoclock.html#front_panel_leds", null ],
        [ "Communication with UHD", "page_octoclock.html#uhd", null ]
      ] ]
    ] ]
];