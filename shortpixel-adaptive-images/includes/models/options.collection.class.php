<?php

	namespace ShortPixel\AI\Options;

	class Collection {
		public static function _() {
			return new self();
		}

        //Added to avoid the deprecation notice in PHP 8.x when adding properties dynamically
        protected $__dyna;
        public function __construct() {
            $this->__dyna = new \stdClass();
        }
        public function getData() {
            return $this->__dyna;
        }

		/**
		 * Getter
		 *
		 * @param $name
		 *
		 * @return mixed
		 */
		public function __get( $name ) {
            return isset($this->__dyna->$name) ? $this->__dyna->$name : (isset( $this->$name ) ? $this->$name : null);
		}

		/**
		 * Setter
		 *
		 * @param mixed    $name
		 * @param Category $value
		 */
		public function __set( $name, $value ) {
			$this->__dyna->$name = $value;
		}

        public function __wakeup() {
            if(!isset($this->__dyna)) {
                $this->__dyna = new \stdClass();
            }
            foreach ($this as $key => $value) {
                if($key != '__dyna') {
                    $this->__dyna->$key = $value;
                    unset($this->$key);
                }
            }
        }
	}